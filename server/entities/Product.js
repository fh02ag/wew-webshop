class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    toJSON() {
        let product = Object.assign({}, this);
        product.meta = undefined;
        product.id = this.$loki;
        return product;
    }
}

module.exports = Product;