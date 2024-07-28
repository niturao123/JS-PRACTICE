//  function capitalize(str){
//     let arr = strToArr(str);


//      let capArr = [];
//      for(let i=0; i<arr.length;i++){
//         if(i=0 += arr[i].toUpperCase())
//         capArr.push(toUpperCase(arr[i]));
//      }

//      return join(capArr)
//  }
// console.log(capitalize("I love dogs"))

// function strToArr(str) {
//     let addstr = [];
//     let word = "";
//     for(let i=0; i<str.length; i++){
//         if(str[i]===" "){
//             addstr.push(word);
//             word= "";
//         }
//         else
//             word = word + str[i];
//     }
//     addstr.push(word);
//     return addstr; 
// }

// console.log(strToArr("I love dogs"));

//  function capital(str) {
//     let capitalstr = "";
//      for (let i = 0; i<String.length; i++){
//         capitalstr = toUpperCase + str[i];
     
//      }
//     return capital;
 
//  }
// console.log(capital ("I love dogs" ))

// function join(arr) {
//     let joinstr = "";
//     for(let i = 0; i<arr.length; i++){
//          joinstr = joinstr + arr[i] + " ";
//     }
//     return joinstr
//  }
//  console.log(join (["I love dogs" ]))











function capitalize(str) {
    let newstr = "";
    for(let i = 0; i<str.length; i++){
        if(i === 0||str[i-1] === " "){
            newstr += str[i].toUpperCase()
        }
        else{
            newstr +=str[i]
        }
    }

   return newstr
    
}
console.log(capitalize("I love dogs"))


