function createSortMethod1() {
    /**
     * 合并
     * @param {*} U 左边数组
     * @param {*} V 右边数组
     * @param {*} S 原始数组
     */
    function merge(U, V, S) {
        var i = 0,
            j = 0,
            k = 0,
            h = U.length - 1,
            m = V.length - 1
        while (i <= h && j <= m) {
            if (U[i] < V[j]) {
                S[k] = U[i]
                i++
            } else {
                S[k] = V[j]
                j++
            }
            k++
        }
        if (i > h) {
            while (j <= m) {
                S[k] = V[j]
                j++
                k++
            }
        } else {
            while (i <= h) {
                S[k] = U[i]
                i++
                j++
            }
        }
    }
    /**
     * 排序
     * @param {*} n 数组长度
     * @param {*} S 数组
     */
    function sort(n, S) {
        if (n > 1) {
            var h = (n / 2) | 0,
                m = n - h
            var U = S.slice(0, h),
                V = S.slice(h)
            sort(h, U)
            sort(m, V)
            merge(U, V, S)
        }
    }
    return sort
}

function createSortMethod2(data) {
    function merge(low, mid, high) {
        var i = low,
            j = mid + 1,
            k = low,
            tmp = []
        while (i <= mid && j <= high) {
            if (data[i] < data[j]) {
                tmp[k] = data[i]
                i++
            } else {
                tmp[k] = data[j]
                j++
            }
            k++
        }
        if (i > mid) {
            while (j <= high) {
                tmp[k] = data[j]
                j++
                k++
            }
        } else {
            while (i <= mid) {
                tmp[k] = data[i]
                i++
                k++
            }
        }
        for (var m = low; m <= high; m++) {
            data[m] = tmp[m]
        }
    }
    function sort(low, high) {
        if (low < high) {
            var mid = ((low + high) / 2) | 0
            sort(low, mid)
            sort(mid + 1, high)
            merge(low, mid, high)
        }
    }
    return sort
}

var data = [3, 45, 98, 2, 8, 100, 39, 56, 81, 190]

console.log('source', data)
var sort = createSortMethod1(data)
sort(data.length, data)
// var sort = createSortMethod2(data)
// sort(0, data.length - 1)
console.log('result', data)
