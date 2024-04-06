describe('Null and Undefined', () => {
    it('should support in TS', () => {
        function sayHello(name?: string | null) {
            if (name) {
                console.log(`Hello ${name}`)
            } else {
                console.log('Hello')
            }
        }

        sayHello('Ricid')
        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)

        const name2: string | null = null
        sayHello(name2)
    })
})