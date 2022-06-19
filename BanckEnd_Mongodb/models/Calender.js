const mongoose = require('mongoose')

const Calender = mongoose.model('Calender', {
  Curso: String,
  Turma: String,
  Turno: String,
  Disciplina: String,
  Professor: String,
  Data: String,  
})

module.exports = Calender
