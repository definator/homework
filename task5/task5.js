module.exports = (arr, number) => {
    if(!Array.isArray(arr) || typeof number !== 'number')
        return;
    let position = arr.indexOf(number);
    if(position > -1){
        return position;
    }
    else{
        position = arr.findIndex(item => item > number);
        position = position < 0 ? arr.length : position;
    }
    return position;

};