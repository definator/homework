module.exports = input => {
    if(typeof input !== 'number')
        return;
    const converted = '' + input;
    const len = converted.length;
    const mid = Math.floor(len);

    for(let i = 0; i < mid; i++){
        if(len === 1 || converted[i] !== converted[len-1-i]){
            return false;
        }
    }
    return true;
};