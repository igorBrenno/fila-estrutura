import express from 'express';
import cors from 'cors';
import {LinkedQueue} from './fila-linked.js'

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const linked = new LinkedQueue()

linked.enqueue("Igor")
linked.enqueue("Brenno")

app.get('/', (req, res) => {
  res.send("Hello")
});

console.log(linked.toArray())
app.get('/queue', (req, res) => {
  res.send({
    'items': linked.toArray()
  })
})

app.post('/enqueue', (req, res) => {
    const element = req.body.element;
    linked.enqueue(element)

    res.send({
      'element': element,
      'pos': linked.size(),
    })
})

app.get('/enqueue/:element', function(req, res) {
    const element = req.params.element
    linked.enqueue(element)
    res.send({
        'element': element,
        'pos': linked.size(),
      })
})

app.get('/dequeue', function(req, res) {
    const element = linked.dequeue()
    res.send({
        'element': element,
      })
})

app.get('/size', function(req, res) {
    const size = linked.size()
    res.send({
        'size': size,
      })
})

app.get('/front', function(req, res) {
    const front = linked.front()
    res.send({
        'front': front,
      })
})

app.get('/rear', function(req, res) {
    const rear = linked.rear()
    res.send({
        'rear': rear,
      })
})

app.get('/isEmpty', function(req, res) {
    const isEmpty = linked.isEmpty()
    res.send({
        'isEmpty': isEmpty,
      })
})

app.listen(8000, () => {
  console.log(`Server is running on port 8000 `);
});

export default app;