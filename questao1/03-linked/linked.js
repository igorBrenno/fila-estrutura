class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.clear()
    }
    enqueue(element){
        const node = new Node(element)
        if (this.front === null && this.rear === null) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node 
            this.rear = node
        }
        
        this._size += 1      
    }
    dequeue(){
        if (this.isEmpty()){
            return "A fila está vazia"
        }
        const node = this.front
        this.front = this.front.next

        if (!this.front) {
            this.rear = null;
        }

        this._size -= 1
        return node.value
    }
    size(){
        return this._size
    }
    isEmpty(){
        return this._size === 0
    }
    front(){
        return this.isEmpty()? "A fila está vazia": this.front.value
    }
    rear(){
        return this.isEmpty()? "A fila está vazia": this.rear.value
    }
    clear() {
        this.front = null 
        this.rear = null
        this._size = 0
    }
}

export {Queue}