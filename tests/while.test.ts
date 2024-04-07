describe('While', () => {

    it('should support while loop', () => {
        let counter: number = 10

        while(counter < 10) {
            console.log(counter)
            counter++
        }
    })

    it('should support do while loop', () => {
        let counter: number = 10
        
        do {
            console.log(counter)
            counter++
        } while (counter < 10);
    })
    
})