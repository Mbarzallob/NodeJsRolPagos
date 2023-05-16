
const express = require('express');
const personasRutas = require('./src/persona/routes')
const port = (3000);

const app= express();

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hello");
})

app.use('/api', personasRutas)

app.listen(port,()=>console.log(port))