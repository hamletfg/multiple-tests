import LoginPage from '../pageobjects/login.js';
import Products from '../pageobjects/products.js';

describe('Login to Swag Labs', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })
})

/*describe('Adding items to the cart', () => {
    it('should add the backpack and t-shirt to the cart', async () =>{
        await ProductsPage.addingToCart(ProductsPage.addBackpack, ProductsPage.backpackDetails)
    })
})*/

