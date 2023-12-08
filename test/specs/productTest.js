import LoginPage from '../pageobjects/login.js';
import ProductPage from '../pageobjects/products.js';

describe('Login to Swag Labs', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        await LoginPage.goodLogin('standard_user', 'secret_sauce')
        await ProductPage.addingToCart(ProductPage.addBackpack, ProductPage.backpackDetails)
    })
})

describe('Adding items to the cart', () => {
    it('should add the backpack and t-shirt to the cart', async () => {
        
    })
})

