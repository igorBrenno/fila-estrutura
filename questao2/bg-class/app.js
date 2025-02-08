import express from 'express';
import cors from 'cors';
import { Queue } from './class-fila.js';

const app = express();

const queue = new Queue()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

queue.enqueue("Igor")
queue.enqueue("Brenno")

app.get('/', (req, res) => {
  res.send("Hello")
});

app.get('/queue', (req, res) => {
  res.send({
    'items': queue.items
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    queue.enqueue(element)
    res.send({
      'element': element,
      'pos': size(),
    })
})

app.get('/dequeue', function(req, res) {
  const element = queue.dequeue()
  res.send({
      'element': element,
    })
})


app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    queue.enqueue(element)
    res.send({
        'element': element,
        'pos': size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = queue.dequeue()
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
  const tamanho = queue.size()
  res.send({
      'size': tamanho,
    })
})

app.get('/front', function(req, res) {
  const primeiro = queue.front()
  res.send({
      'front': primeiro || "Está vazio",
    })
})

app.get('/rear', function(req, res) {
  const ultimo = queue.rear()
  res.send({
      'rear': ultimo,
    })
})

app.get('/isEmpty', function(req, res) {
  const vazio = queue.isEmpty()
  res.send({
      'isEmpty': vazio || "Está vazio",
    })
})


app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;