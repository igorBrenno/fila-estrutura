class Queue {
    constructor(){
        this.items = []
    }
  
    enqueue(element){
        this.items.push(element)
    }
   
    dequeue(){
        if (this.isEmpty()){
            return "A fila está vazia"
        }
        return this.items.shift()
    }
    
    size(){
        return this.items.length
    }
    
    isEmpty(){
        return this.items.length === 0
    }
    
    front(){
        return this.isEmpty()? "A fila está vazia": this.items[0]
    }

    rear(){
        return this.isEmpty()? "A fila está vazia": this.items[size()-1]
    }

    clear() {
        this.items = []; 
    }
}

export {Queue}
