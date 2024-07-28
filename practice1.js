function oddNumber(num) {
    var addOdd = []
    for (let i = 0; i < num.length; i++)
        if (num[i] % 2 != 0) {
            addOdd.push(num[i])
        };
    console.log(addOdd)
}
oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])  // 3,5,7,9