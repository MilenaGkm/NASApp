const express = require('express')
const router = express.Router()
const NasaImg = require('../models/NasaImages')

// router.get('/' , async (req, res) => {
//     res.send("NICE")
// })

router.get('/images', (req, res) => {
    NasaImg.find({}, function(data, err){
        if(err){
            res.send(err)
        }else{ 
        res.send(data)
    }})
})

router.post('/image', (req, res) => {
    const img = new NasaImg({...req.body})
    img.save()
    res.end()
})

router.delete('/image/:id', (req,res) => {
    NasaImg.findByIdAndRemove(req.params.id ,function(err){
        if(err)
            res.send({err})
        else
            res.send({err:0})
    })
})

module.exports = router