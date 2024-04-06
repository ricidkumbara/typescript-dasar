import { Customer, CustomerType } from "../src/enum"

describe('Enum', () => {
    it('should be support', () => {
        const customer: Customer = {
            id: "1",
            name: "Ricid",
            type: CustomerType.GOLD
        }

        console.log(customer)
    })
})