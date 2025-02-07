import { enqueue, dequeue, size, isEmpty, front, rear, items } from "./queue.js"

const enqueue_button = document.getElementById("enqueue")
const dequeue_button = document.getElementById("dequeue")
const front_button = document.getElementById("front")
const rear_button = document.getElementById("rear")
const isEmpty_button = document.getElementById("isEmpty")
const size_button = document.getElementById("size")

const output = document.getElementById("output")


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
    for (let i = 0; i < items.length; i++){
      divMeuArray.appendChild(criarDiv(items[i]))
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
    enqueue(valor)
    exibirArray()
}
function dequeue_fn() {
    dequeue()
    exibirArray()
}
function front_fn() {
    front()
}
function rear_fn() {

}
function isEmpty_fn() {

}
function size_fn() {

}