function sum() {
    var items = Array.from(arguments)
    return items.reduce(function(total, item) {
        return total + item
    }, 0)
}

module.exports = {
    sum: sum
}
