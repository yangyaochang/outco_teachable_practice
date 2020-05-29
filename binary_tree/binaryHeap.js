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
            // 若 child 已在 root，getParent() 仍然可以得到 -1，所以若沒有設 childIndex > 0 的條件，會 check this.storage[0] < this.storage[-1]
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

        // child 不存在，這時候應該不執行 bubble down，但把這個判斷留在 bubbleDown() 裡，getChild() 先 return leftChild
        if (leftChild >= this.size()) {
            return leftChild
        // 這裡用 else if，代表 leftChild < this.size() && rightChild >= this.size 成立才會 return leftChild
        } else if (rightChild >= this.size()) {
            return leftChild
        // 到這裡代表左右子節點都存在，因為若要 swap 要與較小的節點 swap，所以返回較小的節點
        } else if (this.storage[leftChild] < this.storage[rightChild]) {
            return leftChild
        } else {
            return rightChild
        }
    }

    // Parent 有兩個 children，當需要 bubble down 時要選擇與較小的 child swap。若與較大的 child swap，必然會發生較小的 child 會得到一個仍然比自己大的 parent
    // 如此一來必須在另一個子樹執行 swap，但二元樹的優點在於透過選擇左右子樹以節省 time complexity 到 log n，若在兩個子樹都執行便失去了 log n 的優點
    bubbleDown(parentIndex) {
        let childIndex = this.getChild(parentIndex)

        while (childIndex < this.size() && this.storage[parentIndex] > this.storage[childIndex]) {
            this.swap(childIndex, parentIndex)
            parentIndex = childIndex
            childIndex = this.getChild(parentIndex)
        }
    }

    // 用來移除不是在 root 的 element
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

