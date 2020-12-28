module.exports = (arr1,arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return;
    }
    ;
    let result = arr2.map(item => arr1.filter(el => el === item))
    .flat()
    .concat(arr1.filter(item => arr2.indexOf(item) < 0));

    return result;


};