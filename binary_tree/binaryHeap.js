class Minheap {
    constructor() {
        this.storage = []
    }

    swap(index1, index2) {
        [this.storage[index1], this.storage[index2]] = [this.storage[index2], this.storage[index1]]
    }

    peak() {
        return this.storage[0]
    }

    size() {
        return this.storage.length
    }

    insert(value) {
        this.storage.push(value)
        this.bubbleUp(this.size() - 1)
    }

    getParent(childIndex) {
        if (childIndex % 2 === 0) {
            return (childIndex - 2) / 2
        } else {
            return (childIndex - 1) / 2
        }
    }

    bubbleUp(childIndex) {
        let parentIndex = this.getParent(childIndex)

        // Don't know how many swaps have to make, so use while loop
        // When child is not at the top of the min heap and child is smaller that its parent
        while (childIndex > 0 && this.storage[childIndex] < this.storage[parentIndex]) {
            this.swap(childIndex, parentIndex)
            childIndex = parentIndex
            parentIndex = this.getParent(childIndex)
        }
    }

    removePeak() {
        this.swap(0, this.size() - 1)
        let result = this.storage.pop()
        this.bubbleDown(0)
        return result
    }

    getChild(parentIndex) {
        let leftChild = 2 * parentIndex + 1
        let rightChild = 2 * parentIndex + 2

        if (leftChild >= this.size()) {
            return leftChild
        } else if (rightChild >= this.size()) {
            return rightChild
        } else if (this.storage[leftChild] < this.storage[rightChild]) {
            return leftChild
        } else {
            return rightChild
        }
    }

    bubbleDown(parentIndex) {
        let childIndex = this.getChild(parentIndex)

        while (childIndex < this.size() && this.storage[parentIndex] > this.storage[childIndex]) {
            this.swap(childIndex, parentIndex)
            parentIndex = childIndex
            childIndex = this.getChild(parentIndex)
        }
    }

    remove(value) {
        let removeIndex
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] === value) {
                removeIndex = i
            }
        }

        if (removeIndex === undefined) {
            return
        }

        this.swap(removeIndex, this.size() - 1)
        let result = this.storage.pop()
        this.bubbleDown(removeIndex)
        this.bubbleUp(removeIndex)
        return result
    }
}

let test = new Minheap()
test.insert(4)
test.insert(5)
test.insert(9)
test.insert(6)
test.insert(8)
test.insert(7)
test.insert(2)
console.log(test)
console.log(test.removePeak())
console.log(test)
console.log(test.remove(6))
console.log(test)

