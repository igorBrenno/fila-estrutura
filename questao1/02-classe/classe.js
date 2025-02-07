class Queue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue() {
        if (this.items.length > 0){
            return this.items.shift()
        } else {
            return "Fila está vazia"
        }
    }

    front(){
        if (this.items.length > 0) {
            return this.items[0]
        } else {
            return "Fila está vazia"
        }
    }

    rear(){
        if (this.items.length > 0) {
            const end = this.items.length - 1
            return this.items[end]
        } else {
            return "A fila está vazia"
        }
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }
}


export {Queue}