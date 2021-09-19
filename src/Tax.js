const { Amount } = require("./Amount");

class Tax {
    static GST_OF_10_PCT = new Tax(new Amount(0.10))

    constructor(taxPercentage) {
        this._taxPercentage = taxPercentage 
    }
    
    taxAmount(subTotal) {
        return subTotal.multiply(this._taxPercentage)
    }
}

module.exports = {
    Tax
}