// config inicial
var express = require('express')
var cors = require('cors')
var app = express()
var corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(cors()) //Essa linha aqui



// depois do db
const mongoose = require('mongoose')

const Calender = require('./models/Calender')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas
app.post('/', async (req, res) => {
  const {Curso, Turma,Turno,Disciplina,Professor,Data} = req.body

  const calender = {
    Curso,
    Turma,
    Turno,
    Disciplina,
    Professor,
    Data
  }

  try {
    await Calender.create(calender)

    res.status(201).json({ message: 'Agendado com Sucesso' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/', async (req, res) => {
  try {
    const calender = await Calender.find()

    res.status(200).json(calender)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/calender/:id', async (req, res) => {
  const id = req.params.id
  //aqui
  /*app.selector('id')
  .where({id: req.params.id})
  .first()
  .then(iser => res.json(user))
  .catch(err => res.status(500).send(err))
*/

  try {
    const calender = await Calender.findOne({ _id: id })

    if (!calender) {
      res.status(422).json({ message: 'Agenda não encontrada' })
      return
    }

    res.status(200).json(calender)
  } catch (error) {
    res.status(500).json({ erro: error })
  }

  //aqui
  //return {get}
})

app.patch('/calender/:id', async (req, res) => {
  const id = req.params.id

  const {curso,turma, turno,disciplina,professor,data } = req.body

  const calender = {
    curso,
    turma,
    turno,
    disciplina,
    professor,
    data
  }

  try {
    const updatedCalender = await Calender.updateOne({ _id: id }, calender)

    if (updatedCalender.matchedCount === 0) {
      res.status(422).json({ message: 'Evento não encontrado!' })
      return
    }

    res.status(200).json(calender)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/calender/delete/:id', async (req, res) => {
  const id = req.params.id

  const calender = await Calender.findOne({ _id: id })

  if (!calender) {
    res.status(422).json({ message: 'Evento não encontrado!' })
    return
  }

  try {
    await Calender.deleteOne({ _id: id })

    res.status(200).json({ message: 'Evento removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/', (req, res) => {
  res.json({ message: 'Pagina inicial' })
})

mongoose
  .connect(
      "mongodb+srv://Peterson:fundatec123@clusterapi.rakfd.mongodb.net/?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log('Conectou ao banco!')
    
    app.listen(3000)
  })
  .catch((err) => console.log(err))
