function Stack() {
    var index = -1
    var valueStack = []

    function isEmpty() {
        return index === -1
    }

    function createCursor(defaultValue) {
        return {
            current: defaultValue
        }
    }

    function pop(cursor) {
        if (index < 0) {
            return
        }
        cursor.current = valueStack[index]
        valueStack[index] = null
        index--
    }

    function push(cursor, value) {
        index++
        valueStack[index] = cursor.current
        cursor.current = value
    }

    return { pop: pop, push: push, isEmpty: isEmpty, createCursor: createCursor }
}

module.exports = Stack
