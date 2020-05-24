class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
    }
}

const condensedList_recursion = (head) => {
    let seen = new Set()

    const traverse = (preNode, curNode) => {
        if (curNode === null) {return}

        if (seen.has(curNode.data)) {
            curNode = curNode.next
            preNode.next = curNode
            traverse(preNode, curNode)
        } else {
            seen.add(curNode.data)
            traverse(curNode, curNode.next)
        } 
    }

    if (!head) {return null}
    traverse(null, head)
    return head
}

const condensedList_iteration = (head) => {
    let curNode = head
    let preNode = null
    let seen = new Set()

    while (curNode) {
        if (seen.has(curNode.data)) {
            curNode = curNode.next
            preNode.next = curNode
        } else {
            seen.add(curNode.data)
            preNode = curNode
            curNode = curNode.next
        }
        
    }

    return head
}

const a = [3, 4, 3, 6]
const sampleList = new LinkedList()
for (let i = 0; i < a.length; i++) {
    sampleList.add(a[i])
}
console.log(sampleList)
const result_iteration = condensedList_iteration(sampleList.head)
console.log(result_iteration)