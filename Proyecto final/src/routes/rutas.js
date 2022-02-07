const express = require('express')

const router = express.Router();

const mensajes = require('../database/db.js')



router.get('/', async (req,res)=>{
 const db =  await mensajes.find()
 res.send(db) 
})

router.get('/:id',async(req,res)=>{
    const db = await mensajes.findById(req.params.id)
    res.json(db)
})

router.post('/', async(req,res)=>{
 
const db = new mensajes(req.body)
await db.save()
res.json({ estado: 'tarea recivida'})
})

router.put('/:id', async(req,res)=>{
    const db = await mensajes.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{res.json({ estado: 'tarea actualizada'})})
    .catch((err)=>{console.error(err)})
})

router.delete('/:id',async(req,res)=>{
    const db = await mensajes.findByIdAndDelete(req.params.id)
    res.json({ estado: 'tarea borrada'})
})

module.exports = router;