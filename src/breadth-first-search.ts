class TreeNode<T> {
    value: T
    children: TreeNode<T>[]

    constructor(value: T, children: TreeNode<T>[] = []) {
        this.value = value
        this.children = children
    }
}

const breadthFirstSearch = <T>(rootNode: TreeNode<T>, target: T): TreeNode<T> | null => {
    let queue: TreeNode<T>[] = []
    queue.push(rootNode)

    while (queue.length > 0) {
        const currentNode = queue.shift()
        if (currentNode.value === target) return currentNode

        if (currentNode.children.length > 0) {
            for (let child of currentNode.children) {
                queue.push(child)
            }
        }
    }
    return null
}

// Run the test
const rootNode = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(4, [
            new TreeNode(8),
            new TreeNode(9),
            new TreeNode(10)
        ]),
        new TreeNode(5, [
            new TreeNode(11),
            new TreeNode(12),
            new TreeNode(13)
        ])
    ]),
    new TreeNode(3, [
        new TreeNode(6, [
            new TreeNode(14),
            new TreeNode(15),
            new TreeNode(16)
        ]),
        new TreeNode(7, [
            new TreeNode(17),
            new TreeNode(18),
            new TreeNode(19)
        ])
    ])
])

const target = 17
console.log(breadthFirstSearch(rootNode, target))

export { breadthFirstSearch }