function sumArr(array) {
    let addnum = 0;
    for (let i = 0; i < array.length; i++) {
        addnum = addnum + array[i]
    }
    return addnum
}
console.log(sumArr([3,4,5,6,7]))  //15
