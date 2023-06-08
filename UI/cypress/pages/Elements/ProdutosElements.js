class ProductsElements {

    lblNomeProduto = () => '.name'

    tamanhoProduto = (size) => `.button-variable-item-${size}`

    corProduto = (color) => `.button-variable-item-${color}`

    iptQuantidade = () => '.input-text'

    btnComprar = () => '.single_add_to_cart_button'

    iconeQuantidade = () => '.dropdown-toggle > .mini-cart-items'

    btnVerCarrinho = () => '.woocommerce-message > .button'
}

module.exports = new ProductsElements()