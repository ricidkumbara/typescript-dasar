import { sayHello } from "../src/say-hello"

describe('sayHello', () => {
    it('should return hello ricid', () => {
        expect(sayHello('Ricid')).toBe('Hello Ricid')
    })
})