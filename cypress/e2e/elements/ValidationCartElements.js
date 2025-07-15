class ValidationCartElements {

    txtSearchAmazon = () => {
        return '#nav-search'
    }

    btnSearchAmazon = () => {
        return '#nav-search-submit-button'
    }

    btnAddToCart = () => {
        return '#a-autoid-1-announce'
    }

    btnCart = () => {
        return '#nav-cart'
    }

    lblUnityValue = () => {
        return '.a-text-bold > .a-price > [aria-hidden="true"]'
    }

    lblSubTotal = () => {
        return '#sc-subtotal-amount-activecart > .a-size-medium'
    }

    btnIncreaseTheAmountByOne = () => {
        return '[aria-label="Aumentar a quantidade em um"]'
    }

    lblAmount = () => {
        return '[data-a-selector="value"]'
    }

    btnDeleteProduct = () => {
        return '.sc-action-delete-active > .a-declarative > .a-color-link'
    }

    lblProductdeleted = () => {
        return '#sc-list-item-removed-msg-text-delete-b9811dea-b6b9-4455-bfa4-1b5b917156bc'
    }

}
export default ValidationCartElements;