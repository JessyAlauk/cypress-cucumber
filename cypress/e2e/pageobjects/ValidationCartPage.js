import ValidationCartElements from '../elements/ValidationCartElements'

const validationCartElements = new ValidationCartElements
const url = Cypress.config("baseUrl")

class ValidationCartPage {

    accessSite(){
        cy.clearCookies().clearLocalStorage()
        cy.wait(3000); 
        cy.visit(url)
    }

    validateSite(){
        cy.get(validationCartElements.txtSearchAmazon(), { timeout: 5000 }).then((element) => {
        if (element.length === 0 || !element.is(':visible')) {
            cy.reload();
            cy.get(validationCartElements.txtSearchAmazon(), { timeout: 5000 }).should('be.visible');
        } else {
            cy.wrap($el).should('be.visible');
        }
        });
    }

    searchNewProduct(product){
        cy.get(validationCartElements.txtSearchAmazon()).type(product)
        cy.get(validationCartElements.btnSearchAmazon()).click()
    }

    addToCart(){
        cy.wait(1000)
        cy.get(validationCartElements.btnAddToCart()).click()
    }

    accessCart(){
        cy.get(validationCartElements.btnCart()).scrollIntoView().click()
    }

    increaseItem(amount){
        cy.get(validationCartElements.lblAmount()).invoke('text').then((currentAmount) => {
            const numCurrentAmount = parseInt(currentAmount)
            if(amount != numCurrentAmount){
                cy.wait(1000);
                cy.get(validationCartElements.btnIncreaseTheAmountByOne()).click();
                this.increaseItem(numCurrentAmount);
            }
        })
    }

    validateValue(){
        cy.wait(3000); 
        cy.get(validationCartElements.lblAmount()).invoke('text').then((amount) => {
            cy.wait(2000); 
            cy.get(validationCartElements.lblUnityValue()).invoke('text').then((unityValue) => {
                cy.wait(2000);
                cy.get(validationCartElements.lblSubTotal()).invoke('text').then((subTotal) => {
                    cy.wait(2000);
                    const numSubTotal = parseFloat(subTotal.replace("R$", "").trim().replace(".", "").replace(",", ".")); 
                    const numUnityValue = parseFloat(unityValue.replace("R$", "").trim().replace(".", "").replace(",", "."));
                    const times = numUnityValue * amount
                    expect(times).to.equal(numSubTotal);
                })
            })
        });
    }

    deleteProduct(){
        cy.wait(2000)
        cy.get(validationCartElements.btnDeleteProduct()).click();
    }

    validateDelete(){
        cy.wait(1000)
        cy.get(validationCartElements.lblSubTotal()).invoke('text')
            .then((text) => {
            const normalize = text.normalize().trim().replace(/\s+/g, ' ');
            expect(normalize).to.eq('R$ 0,00');
        });
    }
}
export default ValidationCartPage;