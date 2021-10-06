const numerals = [
    {value: 1000, roman:'M'},
    {value: 500, roman:'D'},
    {value: 100, roman:'C'},
    {value: 50, roman:'L'},
    {value: 10, roman:'X'},
    {value: 9, roman: 'IX'},
    {value: 5, roman: 'V'}, 
    {value: 4, roman: 'IV'}, 
    {value: 1, roman: 'I'},
];

export const romanNumerals = (arabic: number):string => {
    for(let i = 0; i < numerals.length; i++ ){
        const digit = numerals[i];
        if(arabic >= digit.value){
            return digit.roman + romanNumerals(arabic - digit.value)
        }
    }
    return '';
}