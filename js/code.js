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
// function isDivisible(n,...factors){
//     return factors.every(factor=> n%factor==0)
// }

// TIDY NUMBERS
// function tidyNumbers(n) {
//     return n.toString('').split('').every((val, ind, arr) => (arr[ind - 1]) ? arr[ind - 1] <= val : val)
// }


// GET MILITARY TIME
// var militaryTime = function (time) {
//     let add = (time.splice(-2) == "PM") ? 12 : 0;

//     let arr = time.slice(0, -2)

//     if (arr[0] == "12" && add) {
// do nothing
//     }else if(arr[0]=="12"){arr[0]="00"}
//     else if(add){arr[0]= (+arr[0] +12) %24}

//     return arr.join(":")
// }

// //DOUBLE CHARS
// function doubleChars(str){
//     return str.split("").map(char=> char + char).join("")
// }

// //EXTRACT THE DOMAIN NAME
// function domainName(url){
//     return str = url.split("/").filter(i => i.includes(".")).join("").split(".").filter((i) => i!="www" && i!='')[0]
// }

// // AM I AFRAID
// var amIAfraid= function(day,num){
//     switch (day.toLowerCase()) {
//         case "monday":
//             return num == 12;
//         case "tuesday":
//             return num > 95;
//         case "wednesday":
//             return num == 34;
//         case "thursay":
//             return num == 0;
//         case "friday":
//             return !(num%2);
//         case "saturday":
//             return num == 56;
//         case "sunday":
//             return Math.abs(num)==666;
//     }
// }

// // ELIMINATE UNSEt BITS
// function eliminateUnsetBits(number) {
//     return number.split("").filter((value) => value == 1).reduce((acc, cur, ind, arr) => acc + Math.pow(2, arr.index - 1 - ind), 0);
// }

//  JULIE'S AGE
const Age = function(x,y){
    return Math.abs(x*y/(1-y))
}