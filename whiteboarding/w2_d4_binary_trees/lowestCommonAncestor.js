const sampleTree = {
    root: {
        value: 5,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right: {
                value: 8,
                left: null,
                right: {
                    value: 9,
                    left: null,
                    right: null
                }
            }
        }
    }
}

const lowestCommonAncestor = (root, num1, num2) => {
    let common = 0

    const dfs = (currentNode) => {
        
        if (currentNode === null) {return false}
        if (currentNode.value === num1 || currentNode.value === num2) {return true}

        let left = dfs(currentNode.left)
        let right = dfs(currentNode.right)

        if (left === true && right === true) {
            common = currentNode.value
        }
        if (left === false && right === false) {return false}
        if (left === true || right === true) {return true}
    }

    dfs(root)
    return common
}

const num1 = 4
const num2 = 9
console.log(lowestCommonAncestor(sampleTree.root, num1, num2))