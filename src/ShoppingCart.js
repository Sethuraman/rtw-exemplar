const { Amount } = require("./Amount")
const { Tax } = require('./Tax')

class ShoppingCart {
    constructor() {
        this._products = []
    }

    addProduct(product) {
        this._products.push(product)
    }

    checkout() {
        let subTotal = this._calculateSubTotal()
        const gst = Tax.GST_OF_10_PCT.taxAmount(subTotal)
        const total = subTotal.add(gst)
        return {
            subTotal,
            gst,
            total
        }
    }

    _calculateSubTotal() {
        let subTotal = new Amount(0)
        for (let product of this._products) {
            subTotal = subTotal.add(product.amount)
        }
        return subTotal
    }
}

module.exports = {
    ShoppingCart
}