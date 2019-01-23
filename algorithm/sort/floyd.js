function floyd1(n, W, D) {
    var i, j, k
    D = W
    for (k = 0; k < n; k++) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                D[i][j] = Math.min(D[i][j], D[i][k] + D[k][j])
            }
        }
    }
}

function floyd2(n, W, D, P) {
    var i, j, k
    D = W
    for (i = 0; i < n; i++) {
        P[i] = []
        for (j = 0; j < n; j++) {
            P[i][j] = 0
        }
    }
    for (k = 0; k < n; k++) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (D[i][k] + D[k][j] < D[i][j]) {
                    P[i][j] = k
                    D[i][j] = D[i][k] + D[k][j]
                }
            }
        }
    }
}

function createFloydPath(n, W, D) {
    var P = []
    floyd2(n, W, D, P)
    function path(q, r) {
        if (P[q][r] != 0) {
            path(q, P[q][r])
            console.log('v' + P[q][r])
            path(P[q][r], r)
        }
    }
    return path
}
