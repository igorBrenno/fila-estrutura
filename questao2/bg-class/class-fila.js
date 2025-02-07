class Fila {
    constructor() {
        this.items = []
    }

    enqueue(elemento) {
        this.items.push(elemento)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Fila Vazia"
        }
        return this.items.shift()
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }
    front() {
        if (this.isEmpty()) {
            return "Fila Vazia"
        } else {
            return this.items[0]
        }
    }
    rear() {
        if (this.isEmpty()) {
            return "Fila Vazia"
        } else {
            return this.items[this.size()-1]
        }
    }

    clear() {
        this.items = [];
    }
}

export {Fila}