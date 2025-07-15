import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import ValidationCartPage from '../../e2e/pageobjects/ValidationCartPage'
const validationCartPage = new ValidationCartPage

Given("uma busca do {string} no site da amazon", (product) => {
    validationCartPage.accessSite();
    validationCartPage.searchNewProduct(product);
})

When("seleciona e inclui este produto no carrinho", () => {
    validationCartPage.addToCart();
})

When("acessa o carrinho", () => {
    validationCartPage.accessCart();
}) 

When("aumenta a quantidade para {int}", (amount) => {
    validationCartPage.increaseItem(amount)
}) 

Then("o valor total deve ser a soma dos produtos", () => {
    validationCartPage.validateValue();
})

When("exclui o produto", () => {
    validationCartPage.deleteProduct();
})

Then("deve retornar um erro informando que nao ha produtos no carrinho", () => {
    validationCartPage.validateDelete();
})