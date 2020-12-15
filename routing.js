const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.sendFile('./views/index.html',{ root: __dirname })
})

router.get('/contact' , (req,res)=> {
    res.sendFile('./views/contact.html', { root: __dirname})
})
router.get('/Blog' , (req,res)=> {
    res.sendFile('./views/Blog.html', { root: __dirname})
})

router.get('/404' , (req,res)=> {
    res.sendFile('./views/S404.html', { root: __dirname})
})
module.exports = router