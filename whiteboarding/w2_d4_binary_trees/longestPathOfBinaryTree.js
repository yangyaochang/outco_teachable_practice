// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

  // DO NOT EDIT
  // generate tree from array
function deserialize(arr) {
    if (arr.length === 0) { return null; }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for(let i = 1; i < arr.length; i += 2) {
        let current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
            current.right = new TreeNode(arr[i + 1]);
            queue.push(current.right);
        }
    }
    return root;
}


const longestPath = (root) => {
    let longest = 0

    const dfs = (currentNode, level) => {
        if (currentNode === null) {
            longest = (level > longest) ? level - 1 : longest
            return
        }
        dfs(currentNode.left, level + 1)
        dfs(currentNode.right, level + 1)
    }

    if (root) {dfs(root, 1)}
    return longest
}

const arr = [1, 2, 3, null, null, null, 4];

const sampleTree = deserialize(arr);
console.log(sampleTree)
console.log(longestPath(sampleTree))