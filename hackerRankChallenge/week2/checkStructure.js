class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)

        if (!this.root) {this.root = newNode}
        traverse(this.root)
        return this

        function traverse(curNode) {
            if (value > curNode.value) {
                if (curNode.right) {
                    traverse(curNode.right)
                } else {
                    curNode.right = newNode
                    return 
                }
            }
            if (value < curNode.value) {
                if (curNode.left) {
                    traverse(curNode.left)
                } else {
                    curNode.left = newNode
                    return
                }
            }
        }
    }
}



function isValid(a) {
    let bst = new BinarySearchTree()
    let list = []

    for (let i = 0; i < a.length; i++) {
        bst.insert(a[i])
    }

    const preorderDFS = (curNode) => {
        if (curNode === null) {return}

        list.push(curNode.value)
        preorderDFS(curNode.left)
        preorderDFS(curNode.right)
    }

    preorderDFS(bst.root)

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== list[i]) {
            return 'NO'
        }
    }
    return 'YES'
}

const a = [3, 4, 5, 1, 2]
console.log(isValid(a))