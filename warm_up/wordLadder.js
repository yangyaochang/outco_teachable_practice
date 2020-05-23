// Identify if there is only one letter difference between two input strings
function oneDiffenerce(word1, word2) {
    let count = 0

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            count++
        }
        if (count > 1) {return false}
    }

    return (count === 1) ? true : false 
}

// Create a graph representing the relation between words
// Adjacency list
// word: [neighbors]
function wordsGraph(beginWord, wordList) {
    let graph = {}

    for (let i = -1; i < wordList.length; i++) {
        let word
        if (i === -1) {
            word = beginWord
        } else {
            word = wordList[i]
        }
        graph[word] = []

        for (let j = 0; j < wordList.length; j++) {
            if (oneDiffenerce(word, wordList[j])) {
                graph[word].push(wordList[j])
            }
        }
    }

    return graph
}

// BFS 的同時也要記得每個 current node 所在的 level
function shortestSequence(beginWord, endWord, wordList) {
    let graph = wordsGraph(beginWord, wordList)
    let queue = []
    let visited = {}
    let current
    let neighbors

    queue.push([beginWord, 1])
    visited[beginWord] = 1
    // strating vertex level = 1

    while (queue.length > 0) {
        current = queue.shift()
        let word  = current[0]
        let count = current[1]
        neighbors = graph[word]

        // 其實也可以用下面這個指令直接返回
        // if (current[0] === endWord) {return 'Shortest sequence:' + current[1]}

        for (let i = 0; i < neighbors.length; i++) {
            if (!visited[neighbors[i]]) {
                queue.push([neighbors[i], count + 1])
                visited[neighbors[i]] = count + 1
            }
        }
    }

    return visited[endWord]
}

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(wordsGraph(beginWord, wordList))
console.log(shortestSequence(beginWord, endWord, wordList))

console.log(oneDiffenerce(beginWord, wordList[0]))