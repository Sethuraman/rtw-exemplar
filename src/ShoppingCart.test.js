const { Amount } = require("./Amount");
const { ShoppingCart } = require("./ShoppingCart");

describe('ShoppingCart tests', () => {
    it('returns 0 when no products are added', () => {
        const cart = new ShoppingCart()
        const result = cart.checkout()
        expect(result.subTotal).objectEquals(new Amount(0))
        expect(result.gst).objectEquals(new Amount(0))
        expect(result.total).objectEquals(new Amount(0))
    })

    it('returns the subTotal, GST and total for one product added to the cart', () => {
        const cart = new ShoppingCart()
        cart.addProduct({ name: 'Cheerios', amount: new Amount(3.89) })
        const result = cart.checkout()
        expect(result.subTotal).objectEquals(new Amount(3.89))
        expect(result.gst).objectEquals(new Amount(0.39))
        expect(result.total).objectEquals(new Amount(4.28))
    })
    
    it('returns the subTotal, GST and total of all products added to the cart', () => {
        const cart = new ShoppingCart()
        cart.addProduct({ name: 'Cheerios', amount: new Amount(3.89) })
        cart.addProduct({ name: 'Lindt', amount: new Amount(3.5) })
        const result = cart.checkout()
        expect(result.subTotal).objectEquals(new Amount(7.39))
        expect(result.gst).objectEquals(new Amount(0.74))
        expect(result.total).objectEquals(new Amount(8.13))
    })
});