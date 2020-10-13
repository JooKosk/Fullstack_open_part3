require('dotenv').config()
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(express.json())
morgan.token('reqData', (req, res) => JSON.stringify(req.body))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqData'))


app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
})

app.get('/api/persons/:id', (req,res, next) => {
    Person.findById(req.params.id)
      .then(person => {
        if (person) {
          res.json(person)
        } else {
          res.status(404).end()
        }
      })
      .catch(error => next(error))
    })

app.put('/api/persons/:id', (req,res,next) => {
  const body = req.body
  
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
    let date = new Date()
      Person.count().then(count => {
        res.send(`Phonebook has info for ${count} people <br><br/>${date}`)
      })
    
})

app.delete('/api/persons/:id', (req,res,next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })

    .catch(error => next(error))
})
/*
const generateNewId = () => {
    const newId = Math.round(Math.random() * (500 - 0) + 0)

    return newId
}
*/

app.post('/api/persons', (req, res, next) => {
    app.use(morgan(morgan.token('body', (req,res) => JSON.stringify.apply(req.body))))
    const body = req.body
  
    if (!body.name || !body.number) {
      return res.status(400).json({ 
        error: 'name or number missing, both required' 
      })
    }

    const person = new Person({
      name: body.name,
      number: body.number,
    })
    
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })

    .catch(error => next(error))

    /*
    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
        error: 'name must be unique'
    })
}
*/
})

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id'})
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({error: error.message})
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})