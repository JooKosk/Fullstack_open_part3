const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
morgan.token('reqData', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqData'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.get('/info', (req, res) => {
    let date = new Date()
    res.send(`Phonebook has info for ${persons.length} people <br><br/>${date}`)
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const generateNewId = () => {
    const newId = Math.round(Math.random() * (500 - 0) + 0)

    return newId
}

app.post('/api/persons', (req, res) => {
    app.use(morgan(morgan.token('body', (req,res) => JSON.stringify.apply(req.body))))
    const body = req.body
  
    if (!body.name || !body.number) {
      return res.status(400).json({ 
        error: 'name or number missing, both required' 
      })
    }

    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
        error: 'name must be unique'
    })
}

    const person = {
        id: generateNewId(),
        name: body.name,
        number: body.number,
    }
    
    persons = persons.concat(person)

    res.json(person)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})