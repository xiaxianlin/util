function createQuickSort(S) {
    function partition(low, high) {
        var pivotitem = S[low]
        var j = low
        for (var i = low + 1; i <= high; i++) {
            if (S[i] < pivotitem) {
                j++
                var tmp = S[i]
                S[i] = S[j]
                S[j] = tmp
            }
        }
        S[low] = S[j]
        S[j] = pivotitem
        return j
    }
    function sort(low, high) {
        if (high > low) {
            var pivotpoint = partition(low, high)
            sort(low, pivotpoint)
            sort(pivotpoint + 1, high)
        }
    }

    return sort
}
var data = [61, 3, 45, 98, 2, 8, 100, 39, 56, 81, 190]

console.log('source', data)
var sort = createQuickSort(data)
console.time('sort')
sort(0, data.length - 1)
console.timeEnd('sort')
console.log('result', data)
