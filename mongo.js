const mongoose = require('mongoose')

const password = process.argv[2]

const url =
  `mongodb+srv://JooKosk:<password>@cluster0.12ahd.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})
if (process.argv.length >= 4) {
    person.save().then(response => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
})} 

// if db user password is the only given parameter, print all persons
if (process.argv.length < 4) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

module.exports = mongoose.model('Person', personSchema)
