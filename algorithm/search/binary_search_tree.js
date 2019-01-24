const { sum } = require('../math')
const { initArray } = require('../../util')
function search(tree, keyin) {
    var found = false,
        p = tree

    while (!found) {
        if (p.key == keyin) {
            found = true
        } else if (keyin < p.key) {
            p = p.left
        } else {
            p = p.right
        }
    }
    return p
}

function createOptSearchTree(n, p, k) {
    function minimum(i, j, p, A) {
        var values = []
        for (var k = i; k <= j; k++) {
            var value = A[i][k - 1] + A[k + 1][j] + sum.apply(null, p.slice(i - 1, j))
            values.push(value)
        }
        var minValue = Math.min.apply(null, values)
        var index = values.indexOf(minValue)
        return [minValue, i + index]
    }
    function optsearchtree(n, p) {
        var i, j, k, diagonal
        var A = initArray(n + 1, [])
        var R = initArray(n + 1, [])
        // 第一行不用
        A[0] = initArray(n + 1, '-')
        R[0] = initArray(n + 1, '-')
        // 填充初始数据
        for (i = 1; i <= n; i++) {
            A[i] = initArray(n + 1, '-')
            R[i] = initArray(n + 1, '-')
            A[i][i - 1] = 0
            A[i][i] = p[i - 1]
            R[i][i - 1] = 0
            R[i][i] = i
        }
        A[n + 1] = initArray(n + 1, '-')
        R[n + 1] = initArray(n + 1, '-')
        A[n + 1][n] = 0
        R[n + 1][n] = 0
        for (diagonal = 0; diagonal <= n; diagonal++) {
            for (i = 1; i <= n - diagonal; i++) {
                j = i + diagonal
                var result = minimum(i, j, p, A)
                A[i][j] = result[0]
                R[i][j] = result[1]
            }
        }
        return [A, R]
    }

    var result = optsearchtree(n, p)
    var A = result[0]
    var R = result[1]
    function tree(i, j) {
        var key = R[i][j]
        var p = {}
        if (key == 0) {
            return null
        } else {
            return {
                key: k[key - 1],
                left: tree(i, key - 1),
                right: tree(key + 1, j)
            }
        }
    }
    return tree
}

var k = ['Allen', 'Bill', 'Don', 'Isabelle', 'Ralph', 'Tom', 'Wally']
var p = [3 / 8, 3 / 8, 1 / 8, 1 / 8, 1 / 2, 3 / 5, 4 / 5]
// var p = [1, 1, 1, 1, 1, 1, 1]
var tree = createOptSearchTree(p.length, p, k)

var root = tree(1, p.length)
console.log(JSON.stringify(root))
