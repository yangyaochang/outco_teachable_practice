// Given a directed acyclic graph (DAG) and two vertices in the graph designating the origin and destination, 
// return a valid path from the origin to the destination. If there is no valid path, return an empty array.

const sampleDAG = {
    0: {
        value: 0,
        edges: [1]
    },
    1: {
        value: 1,
        edges: [2 ,5]
    },
    2: {
        value: 2,
        edges: [4]
    },
    3: {
        value: 3,
        edges: []
    },
    4: {
        value: 4,
        edges: [3]
    },
    5: {
        value: 5,
        edges: []
    }
}

const validPath = (graph, origin, destination) => {
    let visited = new Set()

    const dfs = (curNode) => {
        if (visited.has(curNode.value)) {return []}
        if (curNode.value === destination) {return [curNode.value]}

        visited.add(curNode.value)
        let neighbors = graph[curNode.value].edges
        for (let i = 0; i < neighbors.length; i++) {
            let path = dfs(graph[neighbors[i]])

            if (path.length > 0) {
                path.push(curNode.value)
                return path
            }
        }
        return []
    }
    let reversedPath = dfs(graph[origin])
    return reversedPath.reverse()
}

console.log(validPath(sampleDAG, 0, 3))