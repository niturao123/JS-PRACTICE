function evenNumber(num) {
    var addEven = []
    for (let i = 0; i <num.length; i++) 
        if (num[i] % 2 == 0){
            addEven.push(num[i])
        };
    console.log(addEven) 
        } 
evenNumber([1,2,3,4,5,6,7,8,9,10,11])