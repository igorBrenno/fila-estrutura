import express from 'express';
import cors from 'cors';
import { dequeue, enqueue, front, isEmpty, items, rear, size } from './queue.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

enqueue("Igor")
enqueue("Brenno")

app.get('/', (req, res) => {
  res.send("Hello")
});

app.get('/queue', (req, res) => {
  res.send({
    'items': items
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    enqueue(element)
    res.send({
      'element': element,
      'pos': size(),
    })
})

app.get('/dequeue', function(req, res) {
  const element = dequeue()
  res.send({
      'element': element,
    })
})


app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    enqueue(element)
    res.send({
        'element': element,
        'pos': size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = fila.length !== 0? fila.shift(): "A fila está vazia"
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
  const tamanho = size()
  res.send({
      'size': tamanho,
    })
})

app.get('/front', function(req, res) {
  const primeiro = front()
  res.send({
      'front': primeiro || "Está vazio",
    })
})

app.get('/rear', function(req, res) {
  const ultimo = rear()
  res.send({
      'rear': ultimo,
    })
})

app.get('/isEmpty', function(req, res) {
  const vazio = isEmpty()
  res.send({
      'isEmpty': vazio || "Está vazio",
    })
})


app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;