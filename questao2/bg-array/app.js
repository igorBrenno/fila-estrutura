import express from "express";

import cors from "cors";

const app = express()

let array = []

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.join());

app.get("/", (req, res) => {
    res.send("OII")
})

app.get("/size", function(req, res) {
    const size = array.length
    res.send({
        "Size": size,
    })
})

app.get("/front", function (req, res) {
    const front = null
    
    if (array.length === 0) {
        front = "Fila Vazia"
    } else {
        front = array[0]
    } 
    
    res.send({
        "Front": front,
    })
})

app.get("/rear", function(req, res) {
    const rear = null;
    if (array.length === 0) {
        rear = "Fila Vazia"
    } else {
        rear = array[array.length-1]
    } 
    res.send({
        "Rear": rear,
    })
});

app.get("/isEmpty", function(req, res) {
    const isEmpty = null
    if (array.length === 0) {
        isEmpty = true
    } else {
        isEmpty = false
    }
    res.send({
        "isEmpty": isEmpty,
    })
});



app.get("/dequeue", function(req, res) {
    const elemento = null;
    if (array.length !== 0) {
        elemento = array.shift()
    } else {
        elemento = "Fila Vazia"
    }
    res.send({
        "elemento": elemento,
    })
})

app.get("/queue", function(req, res) {
    res.send({
        "items": array
    })
})

app.get("/enqueue", function(req, res) {
    const elemento = req.body.elemento;
    array.push(elemento)

    res.send({
        "elemento": elemento,
        "pos": array.length,
    })
})

app.get("/enqueue/:elemento", function(req, res) {
    const elemento = req.params.elemento
    array.push(elemento)
    res.send({
        "elemento": elemento,
        "pos": array.length,
    })
})

app.listen(8000, ()=> {
    console.log(`Servidor rodando na porta 8000`); 
});

export default app;