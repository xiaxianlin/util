function times(matrixA, matrixB) {
    var matrixC = []
    if (typeof matrixA === 'number') {
        for (var i = 0; i < matrixB.length; i++) {
            matrixC[i] = []
            for (var j = 0; j < matrixB[i].length; j++) {
                matrixC[i][j] = matrixB[i][j] * matrixA
            }
        }
        return matrixC
    }

    return matrixC
}

function createMatrixMultOrder(n, d) {
    function min(i, j, d, M) {
        if (i == j) {
            return [0, i]
        }
        var values = []
        for (var k = i; k < j; k++) {
            var value = M[i][k] + M[k + 1][j] + d[i] * d[k + 1] * d[j + 1]
            values.push(value)
        }
        var minValue = Math.min.apply(null, values)
        var index = values.indexOf(minValue)
        return [minValue, i + index]
    }

    function minmult(n, d) {
        var i, j, k, diagonal
        var M = [],
            P = []
        for (i = 0; i < n; i++) {
            M[i] = new Array(n).fill('')
            P[i] = new Array(n).fill('')
            M[i][i] = 0
        }

        for (diagonal = 0; diagonal < n; diagonal++) {
            for (i = 0; i < n - diagonal; i++) {
                j = i + diagonal
                var result = min(i, j, d, M)
                M[i][j] = result[0]
                P[i][j] = result[1]
            }
        }
        return P
    }

    var P = minmult(n, d)

    function order(i, j) {
        if (i == j) {
            return 'A' + (i + 1)
        } else {
            var k = P[i][j]
            return '(' + order(i, k) + order(k + 1, j) + ')'
        }
    }

    return order
}

var ma = 2
var mb = [[1, 2, 4], [3, 4, 6], [3, 4, 8]]
// var mc = times(ma, mb)

var matrixD = [5, 2, 3, 4, 6, 7, 8]
var order = createMatrixMultOrder(6, matrixD)
var result = order(0, 5)
console.log(result)
