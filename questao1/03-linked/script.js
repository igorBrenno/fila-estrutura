import { Queue } from "./linked.js"

const enqueue_button = document.getElementById("enqueue")
const dequeue_button = document.getElementById("dequeue")
const front_button = document.getElementById("front")
const rear_button = document.getElementById("rear")
const isEmpty_button = document.getElementById("isEmpty")
const size_button = document.getElementById("size")

const output = document.getElementById("output")

const queue = new Queue()
enqueue_button.addEventListener("click", enqueue_fn)
dequeue_button.addEventListener("click", dequeue_fn)
front_button.addEventListener("click", front_fn)
rear_button.addEventListener("click", rear_fn)
isEmpty_button.addEventListener("click",  isEmpty_fn)
size_button.addEventListener("click",  size_fn)



exibirArray()
function exibirArray(){
    const divMeuArray = document.getElementById("meuArray")
    divMeuArray.innerHTML = ""
    for (let i = 0; i < queue._size; i++){
      divMeuArray.appendChild(criarDiv(queue.front.value))
    }
  }


  function criarDiv(valor){ 
    // const novaDiv = `
    //   <div class='min-w-10 bg-blue-300 shadow-md rounded m-4 p-1'>
    //     <h1 class='text-center'> ${valor}</h1>
    // `
    // return novaDiv
  
    const novaDiv = document.createElement("div")
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"
  
    const texto = document.createElement("h1")
    texto.className = "text-center"
    texto.innerText = valor
  
    novaDiv.appendChild(texto)
    return novaDiv
  }

function enqueue_fn() {
    let valor = document.getElementById("elemento").value;
    queue.enqueue(valor)
    exibirArray()
}
function dequeue_fn() {
    queue.dequeue()
    exibirArray()
}
function front_fn() {
    output.append(criarDiv(queue.front.value))
}
function rear_fn() {
    output.append(criarDiv(queue.rear.value))
}
function isEmpty_fn() {
  output.append(criarDiv(queue.isEmpty()))
}
function size_fn() {
  output.append(criarDiv(queue.size()))
}