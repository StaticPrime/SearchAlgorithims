class TreeNode<T> {
    value: T
    children: TreeNode<T>[]

    constructor(value: T, children: TreeNode<T>[] = []) {
        this.value = value
        this.children = children
    }
}

const depthFirstSearch = <T>(rootNode: TreeNode<T>, target: T): TreeNode<T> => {
    if (rootNode.value === target) return rootNode
    if (rootNode.children.length === 0) return null

    for (let child of rootNode.children) {
        const searchResult = depthFirstSearch(child, target)
        if (searchResult !== null) return searchResult
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
console.log(depthFirstSearch(rootNode, target))

export { depthFirstSearch }