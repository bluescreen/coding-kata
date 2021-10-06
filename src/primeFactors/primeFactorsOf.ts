const primeFactorsOf = (input: number): number[] => {
    const result = [];
    for(let divisor = 2;input > 1; divisor++){
        for(;input % divisor == 0;input /= divisor){
            result.push(divisor);
        }
    }    
    return result;
}

export default primeFactorsOf;