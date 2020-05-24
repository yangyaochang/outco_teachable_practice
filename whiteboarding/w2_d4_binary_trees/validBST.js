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

const validBST = (root) => {
    let list = []

    const inorderDFS = (currentNode) => {
        if (currentNode === null) {return}

        inorderDFS(currentNode.left)
        list.push(currentNode.value)
        inorderDFS(currentNode.right)
    }

    inorderDFS(root)

    for (let i = 0; i < list.length; i++) {
        if (list[i] >= list[i + 1]) {return false}
    }
    return true
}




const arr1 = [5, 2, 7, null, null, 4, 9];
const arr2 = [5, 2, 7, null, 4, null, 9];
const arr3 = [5, 1, 4, null, null, 3, 6];

const sampleTree1 = deserialize(arr1);
const sampleTree2 = deserialize(arr2);
const sampleTree3 = deserialize(arr3);
console.log(validBST(sampleTree1))
console.log(validBST(sampleTree2))
console.log(validBST(sampleTree3))