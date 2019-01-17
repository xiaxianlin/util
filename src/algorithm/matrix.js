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
var ma = 2
var mb = [[1, 2, 4], [3, 4, 6], [3, 4, 8]]

var mc = times(ma, mb)

console.log(mc)
