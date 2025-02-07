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

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
      return res.status(401).json({ message: "Você deve preencher todos os campos!" });
  }

  console.log("Dados recebidos:", { name, email, password });

  const newUser = { name, email, password };
  const email_existing = false;
  for (const user of users) {
    if (newUser.email == user.email) {
      email_existing = true;
    }
  }
  if (!email_existing) {
    users.push(newUser);
    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } else {
    res.status(401).json({ message: "Este email já foi registrado, tente outro!" });
  }
  
});

app.get("/users", (req, res) => {
  let user = users.length === 0? "Não a usúarios cadastrados": users
    res.send({
        'users': user,
    })
});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  for (const user of users) {
    if (email == user.email  && password == user.password) {
      res.status(200).json({ message: "Usuário logado com sucesso!" });
    }
  }
  res.status(401).json({ message: "Senha ou Email estão incorreto!" });


})

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