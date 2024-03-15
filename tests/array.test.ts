describe('Array', () => {
    it('should same with js', () => {
        const names: string[] = ['Ricid', 'Kumbara', 'Additional'] 
        const values: number[] = [1, 2, 3]
        console.log(names, values)
    })
    
    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string> = ['coding', 'gaming', 'gym']
        console.log(hobbies)
    })

    it('should support tupple', () => {
        const person: readonly [string, string, number] = ['Ricid', 'Kumbara', 10] 
        console.log(person)
    })
})
