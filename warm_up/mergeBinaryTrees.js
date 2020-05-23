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

const arr_1 = [1, 3, 2, 5, null, null, null]
const arr_2 = [2, 1, 3, null, 4, null, 7];
const tree_1 = deserialize(arr_1)
const tree_2 = deserialize(arr_2)

const mergeBinaryTrees = (root_1, root_2) => {
    
    const DFS = (current_1, current_2, current_1_parent, direction) => {
        if (!current_1 && !current_2) {return}
        if (!current_1) {
            current_1_parent[direction] = current_2
            return
        }
        if (!current_2) {return}

        current_1.value += current_2.value
        DFS(current_1.left, current_2.left, current_1, 'left')
        DFS(current_1.right, current_2.right, current_1, 'right')
    }

    DFS(root_1, root_2)
    return root_1
}

console.log(mergeBinaryTrees(tree_1, tree_2))

