let items = [1,2,3,4,5,6]

function enqueue(element){
    items.push(element)
}

function dequeue(){
    return items.shift()
}

function size(){
    return items.length
}

function isEmpty(){
    return items.length === 0
}

function front(){
    return isEmpty()? null: items[0]
}

function rear(){
    return isEmpty()? null: items[size()-1]
}

export {enqueue, dequeue, size, isEmpty, front, rear, items}