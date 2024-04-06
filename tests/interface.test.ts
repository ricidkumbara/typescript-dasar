import { Employee, Manager } from "../src/employee"
import { Person } from "../src/person"
import { Seller } from "../src/seller"

describe('Interface', () => {
    it('should support in TS', () => {
        const seller: Seller = {
            id: 1,
            name: "Ricid KUmbara",
            nib: "123",
            npwp: "123"
        }

        seller.id = 2
        seller.name = "Fulan"

        console.log(seller)
    })

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(1, 1)).toBe(2)
    })

    it('should support indexable array', () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ['Ricid', 'Kumbara']

        expect(names).toEqual(['Ricid', 'Kumbara'])
    })

    it('shoud support indexable array for non number index', () => {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Ricid",
            "address": "Indonesia"
        }

        expect(dictionary['name']).toBe("Ricid")
        expect(dictionary['address']).toBe("Indonesia")
    })

    it('should support extends interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Ricid",
            division: "IT"
        }

        console.log(employee)

        const manager: Manager = {
            id: "2",
            name: "Kumbara",
            division: "PPC",
            numberOfEmployee: 10
        }

        console.log(manager)
    })

    it('should support function in interface', () => {
        const person: Person = {
            name: "Ricid",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.log(person.sayHello("Kumbara"))
    })

    it('should support intersection type', () => {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        interface Person extends HasName, HasId {

        }

        const person: Person = {
            id: "1",
            name: "Ricid"
        }

        console.log(person)

        /* Intersection */
        type Domain = HasId & HasName

        const domain: Domain = {
            id:  "2",
            name: "Kumbara"
        }

        console.log(domain)
    })

    it('should support type assertions', () => {
        const person: any = {
            name: "Ricid",
            age: 25
        }

        const person2: Person = person as Person
        // person2.sayHello("Fulan")

        console.log(person2)
    })
})