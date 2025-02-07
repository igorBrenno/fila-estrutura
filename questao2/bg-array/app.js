import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let fila = []
let users = []

app.get('/', (req, res) => {
  res.send("Hello")
});

app.get('/queue', (req, res) => {
  res.send({
    'items': fila
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    fila.push(element)

    res.send({
      'element': element,
      'pos': fila.length,
    })
})

app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    fila.push(element)
    res.send({
        'element': element,
        'pos': fila.length,
      })
})

app.get('/dequeue', function(req, res) {
    const element = fila.length !== 0? fila.shift(): "A fila está vazia"
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
    const size = lista.lenght
    res.send({
        'size': size,
      })
})

app.get('/front', function(req, res) {
    const front = fila.length === 0? "A fila está vazia": fila[0]
    res.send({
        'front': front,
      })
})

app.get('/rear', function(req, res) {
    const rear = fila.length === 0? "A fila está vazia": fila[fila.length-1]
    res.send({
        'rear': rear,
      })
})

app.get('/isEmpty', function(req, res) {
    const isEmpty = fila.length === 0? true: false
    res.send({
        'isEmpty': isEmpty,
      })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;