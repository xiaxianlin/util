function fib(n) {
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

function fib2(n) {
    var i = 0,
        f = []
    f[0] = 0
    if (n > 0) {
        f[1] = 1
        for (i = 2; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2]
        }
    }
    return f[n]
}

function fib3(n) {
    var prev1 = 1,
        prev2 = 0,
        i = 0

    if (n == 0) {
        return prev2
    } else if (n == 1) {
        return prev1
    } else {
        var f = 0
        for (i = 2; i <= n; i++) {
            f = prev1 + prev2
            prev2 = prev1
            prev1 = f
        }
        return f
    }
}

function fib4(n) {
    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5))
}

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

console.time('bin')
var result = bin1(6, 4)
console.timeEnd('bin')
console.log(result)
