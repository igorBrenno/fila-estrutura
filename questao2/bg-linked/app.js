import express from 'express';
import cors from 'cors';
import {LinkedQueue} from "./fila-linked.js"

const app = express();
const lQueue = new LinkedQueue()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = []

app.get('/', (req, res) => {
  res.send("Hello")
});

app.get('/queue', (req, res) => {
  res.send({
    'items': lQueue
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    lQueue.enqueue(element)

    res.send({
      'element': element,
      'pos': lQueue.size(),
    })
})

app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    lQueue.enqueue(element)
    res.send({
        'element': element,
        'pos': lQueue.size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = lQueue.dequeue()
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
    const size = lQueue.size()
    res.send({
        'size': size,
      })
})

app.get('/front', function(req, res) {
    const front = lQueue.front()
    res.send({
        'front': front,
      })
})

app.get('/rear', function(req, res) {
    const rear = lQueue.rear()
    res.send({
        'rear': rear,
      })
})

app.get('/isEmpty', function(req, res) {
    const isEmpty = lQueue.isEmpty()
    res.send({
        'isEmpty': isEmpty,
      })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;