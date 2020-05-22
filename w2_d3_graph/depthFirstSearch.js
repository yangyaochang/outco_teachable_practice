'use strict';

class Graph {
    constructor() {
        this.storage = {}
    }

    addVertex(id) {
        if (id in this.storage) {return}
        this.storage[id] = []
    }

    removeVertex(id) {
        if (id in this.storage) {
            delete this.storage[id]

            let edges = Object.values(this.storage)
            for (let i = 0; i < edges.length; i++) {
                for (let j = 0; j < edges[i].length; j++) {
                    if (edges[i][j] === id) {
                        edges[i].splice(j, 1)
                    }
                }
            }
            return true
        }
        return false
    }

    addEdge(id1, id2) {
        if (!(id1 in this.storage) || !(id2 in this.storage)) {return false}

        this.storage[id1].push(id2)
        return true
    }

    removeEdge(id1, id2) {
        if (!(id1 in this.storage)) {return false}
        if (!(id2 in this.storage)) {return false}
        for (let i = 0; i < this.storage[id1].length; i++) {
            if (this.storage[id1][i] === id2) {
                this.storage[id1].splice(i, 1)
                return true
            }
        }
        return false
    }

    isVertex(id) {
        return (id in this.storage) ? true : false
    }

    neighbors(id) {
        return (id in this.storage) ? this.storage[id] : null
    }
}

let graph = new Graph()
for (let i = 1; i < 7; i++) {
    graph.addVertex(i)
}
graph.addEdge(3, 2)
graph.addEdge(3, 1)
graph.addEdge(2, 5)
graph.addEdge(1, 5)
graph.addEdge(5, 6)
graph.addEdge(1, 6)
graph.addEdge(4, 1)
graph.addEdge(4, 6)

console.log(graph)

const iterativeDFS = (graph, start) => {
    let stack = []
    let visited = new Set()
    let currentNode
    let neighbors

    stack.push(start)
    visited.add(start)

    while(stack.length > 0) {
        currentNode = stack.pop()
        neighbors = graph.storage[currentNode]

        console.log(currentNode)

        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i])
                visited.add(neighbors[i])
            }
        }
    }
}

console.log(iterativeDFS(graph, 3))

const recursiveDFS = (graph, start) => {
    let stack = []
    let visited = new Set()

    const traverse = (currentNode) => {
        if (visited.has(currentNode)) {return}

        console.log(currentNode)
        visited.add(currentNode)
        let neighbors = graph.storage[currentNode]
        for (let i = 0; i < neighbors.length; i++) {
            traverse(neighbors[i])
        }
    }

    traverse(start)
}

console.log(recursiveDFS(graph, 3))
