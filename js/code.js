// WORD REVERSE

// function reverseWord(str ){
//     return  str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(reverseWord("Hello World"))

// MULTIPLES OF 3 AND 5
// function solution(num){
//     let set = (num<=0)? new Set([0]): new Set();

//     for (let index = num-1 ; index > 0; index--) {
//         if(!((index%3)*(index%5))){
//             set.add(index);
//         }
//     }


//     return Array.from(set).reduce((acc,cur)=>acc+cur)
// }

// console.log(solution(10))

// IS N DIVISIBLE BY (...)
function isDivisible(n,...factors){
    return factors.every(factor=> n%factor==0)
}