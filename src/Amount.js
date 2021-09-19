/**
 * This class is a value object. It is a good practice to not use primitives such as strings and numbers
 * directly in your codebase. By using a wrapper class such as this, you provide better meaning to an entity. 
 * In this case, we represent any amount within the shopping cart application as an Amount instead of a number.
 * This allows us to wrap functionality such as rounding in a common place.
 * An important aspect of a value object is that it is immutable. In the sense, once create the internal value 
 * property should not be modified. Read more here - https://medium.com/swlh/value-objects-to-the-rescue-28c563ad97c6
 */
class Amount {
    constructor(value) {
        if(value < 0) {
            throw new Error('negative amounts are not allowed')
        }
        this._value = value
    }

    add(amount) {
        const result = (this._value + amount._value).toFixed(2)
        return new Amount(+result)
    }

    multiply(amount) {
        const result = (this._value * amount._value).toFixed(2)
        return new Amount(+result)
    }

    equals(amount) {
        return amount._value === this._value
    }

    toString() {
        return this._value.toFixed(2)
    }
}

module.exports = { Amount }