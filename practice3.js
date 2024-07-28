function findAvarge(num) {
    var addAvarge = 0;
    for (let i = 0; i < num.length; i++) {
        addAvarge+=num[i];
        
    }
    console.log(addAvarge/num.length)
}
findAvarge([3,3,6,7,8,9,0])
    