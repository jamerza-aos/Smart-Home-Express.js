const express = require('express')
const app = express()
const PORT = 5001
const router = require('./routing')
app.use(express.static('public'))
app.use(router)


app.use((req,res) =>{
    res.status(404).send('Sorry cant find that ')
})


app.listen(PORT, () =>console.log (`Server listing on http://localhost:${PORT}`))