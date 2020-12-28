module.exports = (roman_str) => {
  const romans = ['I','V','X','L','C','D','M'],
  arabics = [1,5,10,50,100,500,1000],
  regexp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

    if(!regexp.test(roman_str)){
        return;
    }

    let result = 0, number, prev;

    for(let i = 0; i < roman_str.length; i++){
        
        number = arabics[romans.indexOf(roman_str[i])];
        if(!prev){
            prev = number;
            result += number;
            continue;
        }
        //Проверяем не является ли текущая цифра больше предыдущей как например XC
        if(number > prev){
            result = (result - prev) + (number - prev);
        }
        else{
            result += number;
        }
        prev = number;
    }
    return result;
};
