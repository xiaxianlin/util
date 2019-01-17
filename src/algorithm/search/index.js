function seqSearch(data, key) {
    var loc = 0
    var len = data.length - 1
    while (loc <= len && data[loc] != key) {
        loc++
    }
    return loc > len ? -1 : loc
}

function binSearch(data, key) {
    var low = 0,
        high = data.length - 1,
        mid = 0,
        loc = -1

    while (low <= high && loc == -1) {
        mid = ((low + high) / 2) | 0
        if (key == data[mid]) {
            loc = mid
            break
        } else if (key < data[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return loc
}

function binSearch1(S, x, low, high) {
    low = typeof low === 'number' ? low : 0
    high = typeof high === 'number' ? high : S.length - 1
    if (low > high) {
        return -1
    } else {
        var mid = ((low + high) / 2) | 0
        if (x === S[mid]) {
            return mid
        } else if (x < S[mid]) {
            return binSearch1(S, x, low, mid - 1)
        } else {
            return binSearch1(S, x, mid + 1, high)
        }
    }
}

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 24, 25, 25, 34, 34, 45, 46, 53, 61]

var loc = binSearch1(data, 100)

console.log(loc)
