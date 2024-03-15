import { Category, Product } from "../src/type-alias"

describe('Type Alias', () => {
    it('should able to support in typescript', () => {
        const category: Category = {
            id: 1,
            name: "HP"
        }

        const product: Product = {
            id: "1",
            name: "Samsung S19",
            price: 1000,
            category: category
        }

        console.log(category)
        console.log(product)
    })
})
