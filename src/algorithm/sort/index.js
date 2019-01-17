function swap(arr, i, j) {
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
/**
 * 冒泡排序
 */
function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j + 1, j)
            }
        }
    }
    return arr
}
/**
 * 选择排序
 */
function selectionSort(arr) {
    var len = arr.length
    var minIndex, tmp
    for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }
    return arr
}
/**
 * 插入排序
 */
function insertionSort(arr) {
    var len = arr.length
    var preIndex, current
    for (var i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}
/**
 * 希尔排序
 */
function shellSort(arr) {
    var len = arr.length,
        tmp,
        gap = 1,
        range = 3
    while (gap < len / range) {
        gap = gap * range + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / range)) {
        for (var i = gap; i < len; i++) {
            tmp = arr[i]
            for (var j = i - gap; j >= 0 && arr[j] > tmp; j -= gap) {
                arr[j + gap] = arr[j]
            }
            arr[j + gap] = tmp
        }
    }
    return arr
}

function merge(left, right) {
    var result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
    return result
}
/**
 * 归并排序
 */
function mergeSort(arr) {
    var len = arr.length
    if (len < 2) {
        return arr
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge2(data, low, mid, high) {
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
    for (var m = low; m < high; m++) {
        data[m] = tmp[m]
    }
}

function mergeSort2(data, low, high) {
    low = typeof low === 'number' ? low : 0
    high = typeof high === 'number' ? high : data.length - 1
    if (low < high) {
        var mid = ((low + high) / 2) | 0
        mergeSort2(low, mid)
        mergeSort2(mid + 1, high)
        merge2(data, low, mid, high)
    }
}

function partition(arr, left, right) {
    var pivot = left,
        index = pivot + 1
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}
/**
 * 快速排序
 */
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right

    if (left < right) {
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}

var arrayLength

function heapify(arr, i) {
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest != i) {
        swap(arr, i, largest)
        heapify(arr, largest)
    }
}

function buildMaxHeap(arr) {
    arrayLength = arr.length
    for (var i = Math.floor(arrayLength / 2); i >= 0; i--) {
        heapify(arr, i)
    }
}
/**
 * 堆排序
 */
function heapSort(arr) {
    buildMaxHeap(arr)
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i)
        arrayLength--
        heapify(arr, 0)
    }
    return arr
}
/**
 * 计数排序
 */
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue + 1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketLen = maxValue + 1

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0
        }
        bucket[arr[i]]++
    }

    for (var j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j
            bucket[j]--
        }
    }
    return arr
}
/**
 * 桶排序
 */
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr
    }
    var i,
        len = arr.length,
        min = arr[0],
        max = arr[0]
    for (i = 1; i < len; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }

    bucketSize = bucketSize || 5
    var bucketCount = Math.floor((max - min) / bucketSize) + 1,
        buckets = new Array(bucketCount)

    for (i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }

    for (i = 0; i < len; i++) {
        buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
    }

    arr.length = 0
    for (i = 0; i < bucketCount; i++) {
        insertionSort(buckets[i])
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])
        }
    }
    return arr
}

function radixSort(arr, maxDigit) {
    var mod = 10,
        dev = 1,
        counter = []
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev)
            if (counter[bucket] == null) {
                counter[bucket] = []
            }
            counter[bucket].push(arr[j])
        }
        var pos = 0
        for (var j = 0; j < counter.length; j++) {
            var value = null
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value
                }
            }
        }
    }
    return arr
}

var arr = [3, 45, 2, 8, 100, 39, 56, 81, 98, 190]
console.log(arr)
console.time('sort')
// var result = bubbleSort(arr)
// var result = selectionSort(arr)
// var result = insertionSort(arr)
// var result = shellSort(arr)
var result = mergeSort2(arr)
// var result = quickSort(arr)
// var result = heapSort(arr)
// var result = countingSort(arr, 100)
// var result = bucketSort(arr)
// var result = radixSort(arr, 3)
console.timeEnd('sort')
console.log(arr)
