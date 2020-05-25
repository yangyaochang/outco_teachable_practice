// DO NOT EDIT
// Vertex class
class Vertex{
    constructor(id){
        this.id = id !== undefined? id : null;
        this.edges = [];
    }
}

  // DO NOT EDIT
  // generate graph from int and array of arrays
function deserialize(n, edges){
    let vertices = {};
    while (n--){
        vertices[n] = new Vertex(n);
    }
    let v1;
    let v2;
    edges.forEach(edge => {
        v1 = edge[0];
        v2 = edge[1];
        vertices[v1].edges.push(vertices[v2]);
        vertices[v2].edges.push(vertices[v1]);
    });

    return vertices[0];
}

// DO NOT EDIT
// sampleGraph is the vertex with id 0
const sampleGraph1 = deserialize(5, [[0, 1], [0, 2], [0, 3], [3, 4]])
const sampleGraph2 = deserialize(6, [[0, 1], [0, 2], [1, 2], [3, 4], [0, 3]])
console.log(sampleGraph1)

const isTree = (graph) => {
    let visited = new Set()

    const isAcyclic = (graph) => {
        
        const dfs = (curNode) => {
            if (visited.has(curNode.id)) {return}

            let count = 0
            visited.add(curNode.id)
            let neighbors = curNode.edges
            for (let i = 0; i < neighbors.length; i++) {
                if (visited.has(neighbors[i])) {
                    count++
                    if (count > 1) {return false}
                }
                dfs(neighbors[i])
            }
        }
        dfs(graph)
        
    }


}

console.log(isTree(sampleGraph1))