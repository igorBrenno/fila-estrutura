import express from "express";

import cors from "cors";

import {Fila} from "./class-fila.js"

const app = express()
const fila = new Fila()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.join());

app.get("/", (req, res) => {
    res.send("OII")
})

app.get("/size", function(req, res) {
    const size = fila.size()
    res.send({
        "Size": size,
    })
})

app.get("/front", function (req, res) {
    const front = fila.front()
    res.send({
        "Front": front,
    })
})

app.get("/rear", function(req, res) {
    const rear = fila.rear();
    res.send({
        "Rear": rear,
    })
});

app.get("/isEmpty", function(req, res) {
    const isEmpty = fila.isEmpty()
    res.send({
        "isEmpty": isEmpty,
    })
});


app.get("/dequeue", function(req, res) {
    const elemento = fila.dequeue();
    res.send({
        "elemento": elemento,
    })
})

app.get("/queue", function(req, res) {
    res.send({
        "items": fila.items
    })
})

app.get("/enqueue", function(req, res) {
    const elemento = req.body.elemento;
    fila.enqueue(elemento)

    res.send({
        "elemento": elemento,
        "pos": fila.size,
    })
})

app.get("/enqueue/:elemento", function(req, res) {
    const elemento = req.params.elemento
    fila.enqueue(elemento)
    res.send({
        "elemento": elemento,
        "pos": fila.size(),
    })
})

app.listen(8000, ()=> {
    console.log(`Servidor rodando na porta 8000`); 
});

export default app;