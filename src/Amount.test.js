const { Amount } = require('./Amount')

describe('Amount tests', () => {
    it('when adding an amount to another it returns a new amount with the value added', () => {
        const amount = new Amount(1.2)
        const result = amount.add(new Amount(2.1))
        expect(result).objectEquals(new Amount(3.3))
    })

    it('when multiplying an amount to another it returns a new amount with the value multiplied', () => {
        const amount = new Amount(1.2)
        const result = amount.multiply(new Amount(2.1))
        expect(result).objectEquals(new Amount(2.52))
    })

    it('while displaying an amount it rounds the value to 2 decimal places', () => {
        expect(new Amount(1.257).toString()).toEqual("1.26")
        expect(new Amount(1.244).toString()).toEqual("1.24")
        expect(new Amount(1.2445678).toString()).toEqual("1.24")
    })

    it('throws an error when an amount with a negative value is attempted', () => {
        expect(() => new Amount(-1)).toThrow('negative amounts are not allowed')
    })
})