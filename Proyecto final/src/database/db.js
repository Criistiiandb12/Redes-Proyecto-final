const mongoose = require('mongoose');

const {Schema, model,connect } = mongoose;

connect('mongodb+srv://CriitiianBuiles321:1029384756@cluster0.xzqb5.mongodb.net/test')
.then(db => console.log('db  esta conectado'))
.catch(err => console.error(err))

var schema = new Schema({
    titulo:String,
   mensaje:String,

 
  });
  
  
  module.exports = model("mensajes", schema);