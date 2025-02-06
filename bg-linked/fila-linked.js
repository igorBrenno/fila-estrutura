class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class FilaLinked {
    constructor () {
        this.__front = null
        this.__tail = null
        this.__size = 0
    }

    size() {
        return this.__size
    }

    enqueue(value) {
        const node = new Node(value, null)
        if (this.__size === 0) {
            this.__front = node
            this.__tail = node
        } else {
            this.__tail.next = node
            this.__tail = node
        }

        this.__size++
    }

    dequeue() {
        if (this.__size === 0) {
            return "Fila vazia"
        } else {
            const value = this.__front.value
            this.__front = this.__front.next
            this.__size--
            return value
        }
    }

    front() {
        if (this.isEmpty()) {
            return "Fila vazia"
        }
        return this.__front.value
    }

    tail() {
        if (this.isEmpty()) {
            return "Fila vazia"
        }
        return this.__size === 0
    }

    print() {
        let temp = this.__front
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    isEmpty() {
        return this.__size === 0
    }

    toArray() {
        let array = []
        current = this.__front
        while (current !== null) {
            array.push(current.value)    
            current = current.next
        }
        return current;
    }

}

export {FilaLinked}