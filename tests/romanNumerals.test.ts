import { romanNumerals } from "../src/romanNumerals/romanNumerals";

describe('Roman numerals kata', ()=> {

    it('should return nothing for 0', () => {
        expect(romanNumerals(0)).toEqual('');
    })

    it('should return I for 1', () => {
        expect(romanNumerals(1)).toEqual('I');
    })

    it('should return II for 2', () => {
        expect(romanNumerals(2)).toEqual('II');
    })

    it('should return III for 3', () => {
        expect(romanNumerals(3)).toEqual('III');
    })

    it('should return IV for 4', () => {
        expect(romanNumerals(4)).toEqual('IV');
    })

    it('should return V for 5', () => {
        expect(romanNumerals(5)).toEqual('V');
    })

    it('should return IX for 9', () => {
        expect(romanNumerals(10)).toEqual('X');
    })

    it('should return X for 10', () => {
        expect(romanNumerals(10)).toEqual('X');
    })

    it('should return XX for 20', () => {
        expect(romanNumerals(20)).toEqual('XX');
    })


    it('should return XXVIII for 28', () => {
        expect(romanNumerals(28)).toEqual('XXVIII');
    })

    it('should return MMXIII for 2013', () => {
        expect(romanNumerals(2013)).toEqual('MMXIII');
    })

    
    
})