describe('Function', () => {
    it('should support in typescript', () => {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello('Ricid')).toBe('Hello Ricid')

        function printHello(name: string): void {
            console.log(`Hello ${name}`)
        }

        printHello('Ricid')

    })

    it('should support default value', () => {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`
        }  

        expect(sayHello('Ricid')).toBe('Hello Ricid')
        expect(sayHello()).toBe('Hello Guest')
    })

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0

            for (const value of values) {
                total += value
            }

            return total
        }

        expect(sum(1,2,3)).toBe(6)
    })

    it('should support optional parameter', () => {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`
            }

            return `Hello ${firstName}`
        }

        expect(sayHello('Ricid', 'Kumbara')).toBe('Hello Ricid Kumbara')
        expect(sayHello('Ricid')).toBe('Hello Ricid')
    })

    it('should support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase()
            } else if (typeof value === 'number') {
                return value * 10
            }
        }

        expect(callMe('ricid')).toBe('RICID')
        expect(callMe(10)).toBe(100)
    })
})

