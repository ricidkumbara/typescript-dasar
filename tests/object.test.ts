describe('Object', () => {
    it('should support in typscript', () => {
        const persons: { id: string, name: string, hobbies?: string[] } = {
            id: "1",
            name: "Ricid Kumbara"
        }

        console.log(persons)

        persons.id = "2"
        persons.name = "Fulan"

        console.log(persons)
    })
})