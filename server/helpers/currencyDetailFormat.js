module.exports = function (quotes) {
    let currency = []
    for (let key in quotes) {
        let obj = {}
        obj.from = key.slice(0, 3)
        obj.to = key.slice(3, 6)
        obj.value = +quotes[key].toFixed(2)
        currency.push(obj)
    }
    return currency
}