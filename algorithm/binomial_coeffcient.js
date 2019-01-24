function bin1(n, k) {
    if (k == 0 || n == k) {
        return 1
    } else {
        return bin1(n - 1, k - 1) + bin1(n - 1, k)
    }
}

function bin2(n, k) {
    var i,
        j,
        B = []

    for (i = 0; i <= n; i++) {
        B[i] = []
        for (j = 0; j <= Math.min(i, k); j++) {
            if (j == 0 || j == i) {
                B[i][j] = 1
            } else {
                B[i][j] = B[i - 1][j - 1] + B[i - 1][j]
            }
        }
    }
    return B[n][k]
}
