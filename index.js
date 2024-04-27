const express = require("express")
const app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})
app.get('/:nombre',(req,res)=>{
    res.send("Hola Mundo " + req.params.nombre)
})
app.listen(port,()=>{
    console.log('Aplicacion Corriendo')
})
