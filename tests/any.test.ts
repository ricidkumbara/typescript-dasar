describe('Any', () => {
    it('should support any data type', () => {
        const person: any = {
            id: 1,
            name: 'Ricid Kumbara',
            country: "ID"
        }

        person.address = 'PWK'

        console.log(person)
    })
})