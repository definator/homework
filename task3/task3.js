module.exports = input => {
    if(typeof input !== 'string' || input.length > 104)
        return false;
    const parentheses = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };
    let stack = [], symbol;
    for(let i = 0; i < input.length; i++){
        symbol = input[i];
        if(parentheses[symbol]){
            stack.push(symbol);
        }
        else {
            if(symbol === parentheses[stack.pop()]){
                continue;
            }
            else{
                return false;
            }
        }
    }
    return true;
};