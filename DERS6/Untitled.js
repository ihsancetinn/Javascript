// function hello(){
//     console.log('Hello World');
// }

// hello()

/* function sum(a,b){
    console.log(a+b);
}

sum(12,3) */

// function sum(a,b){
//     return (a+b);
// }
/* sum(12,3) //Sonucu göremedik return ü yakala
let toplam = sum(12,3)
console.log('Result : ',toplam);
console.log(sum(12,3)); 
console.log(sum(13,5)+5);*/

/* function sum(){
    // return ('selam');
    console.log('Selam');
}
console.log(typeof sum()); */

/* function addTwo(number){
    return +number/2 // + ile  gelen stringi number  yapıyoruz
    // Number(number) type conversion
}

console.log(addTwo('6'));
 */
// selam('Mark')

// function selam (name = 'New User') {
//     console.log(`Hello ${name}`);
// }

// // selam('Edward')
// // selam('Hasan')
// selam()
// selam('Yunus')
// // DRY Don't Repeat Yourself
// function sayHi ( myName) {
//     console.log(`Hello ${myName}`);
//     myName = `Ed`
//     console.log(`Hello ${ myName}`);
// }
// // 
// // let myName = "mark";
// // sayHi(myName)
// console.log("Outside Function", myName; */

// let student = {};
// student.name = 'Mark'
// function sayHi2(student){
//     console.log(`Hello ${student.name} entry point`);
//     student.name ='John';
//     console.log(`Hello ${student.name} first point`);
//     student = {name : 'Leon'}
//     console.log(`Hello ${student.name} inside function`);
// }
// sayHi2(student)
// console.log(`Hello! ${student.name} from outside`);

// function div (num1, num2) {
//     // console.log(num1/num2);
//     if (num2 ===0){
//         console.log("zero division error");
//     }else{
//         console.log(num1/num2);
//     }
// }
// // console.log(typeof Infinity);
// div(10,0)


// function div (num1, num2) {
//     // console.log(num1/num2);
//     if (num2 ===0) return ("zero division error"); return (num1/num2);
//     }
// // console.log(typeof Infinity);
// console.log(div(10,0)); */
// function div2(num1,num2){
//     return num2 ? num1 /num2 : "zero division error"
// }
// console.log(div2(18,6));

// (num2===0) ? console.log("zero division error") : (num1/num2)
// let sum = 0;
// function sum(a,b, ...args) {
//     // console.log(arguments);
//     for (let i=0; i< arguments.length; i++){
//       sum += arguments[i];
    
// }  
// console.log(sum[i]);
//     }
    

// function sayHi1() {
//     return "Hello from sayhi1"
// }
// console.log(sayHi1());
// const sayHi2 = function greet(){
//     return "Hello from sayhi2"
// }
// console.log(sayHi2())

// const pascalNumber = function (n) {
    
//     return(n*(n+1)/2)
// }
// console.log(pascalNumber(4));

// const pascalNumber = function total (n) {
    
// if(n===1) return 1;
// return n + total(n-1)
// }
// console.log(pascalNumber(8));
//Immediaetly invoked function expression
// let result =(function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(3);
// console.log(result);
// function hello(){
//     console.log('Hello World');
// }
// hello()
/* function sum(a,b){
    console.log(a+b);
}
sum(12,3) */
// function sum(a,b){
//     return (a+b);
// }
/* sum(12,3) //Sonucu göremedik return ü yakala
let toplam = sum(12,3)
console.log('Result : ',toplam);
console.log(sum(12,3)); 
console.log(sum(13,5)+5);*/
/* function sum(){
    // return ('selam');
    console.log('Selam');
}
console.log(typeof sum()); */
/* function addTwo(number){
    return +number/2 // + ile  gelen stringi number  yapıyoruz
    // Number(number) type conversion
}
console.log(addTwo('6'));
 */
// selam('Mark')
/* function selam (name = 'New User') {
    console.log(`Hello ${name}`);
}
// selam('Edward')
// selam('Hasan')
selam()
selam('Yunus') */
// DRY Don't Repeat Yourself
/* function sayHi(myName){
    console.log(`Hello ${myName}`);
    myName = 'Ed'
    console.log(`Hello ${myName}`);
}
let myName = 'Eren';
sayHi(myName)
console.log('Outside function', myName); */
/* let student = {};
student.name = 'Mark'
function sayHi2(student){
    console.log(`Hello ${student.name} entry point`);
    student.name ='John';
    console.log(`Hello ${student.name} first point`);
    student = {name : 'Leon'};
    console.log(`Hello ${student.name} inside function`);
}
sayHi2(student)
console.log(`Hello! ${student.name} from outside`);  */
/* function div (num1, num2){
    // console.log(num1/num2);
    if(num2 === 0) return ("Zero Division Error");
    return (num1/num2);
}
console.log(div(12,0)); */
// function div2(num1,num2){
//     return num2 ? num1 / num2 : 'Zero Division Error'
// }
// console.log(div2(18,3));
/* function sum() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
} */
// console.log(sum(1, 2, 3, 4, 7));
// function sum2(a,b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a+b
// }
// console.log(sum2(1,2,3,4,5));
/* function sayHi1(){
    return 'Hello from sayhi1'
}
console.log(sayHi1()); */
/* const sayHi2 = function(a,b){
    return a+b
}
console.log(sayHi2(3,6)); */
// console.log(greet()); // isimle gelmez
/* const pascalNumber = function total (n){ //4+3+2+1
    if(n===1) return 1;
    return n + total(n-1)
}
// console.log(pascalNumber(4));
console.log(typeof pascalNumber); */
//Immediaetly invoked function expression
// function hello(){
//     console.log('Hello World');
// }
// hello()
/* function sum(a,b){
    console.log(a+b);
}
sum(12,3) */
// function sum(a,b){
//     return (a+b);
// }
/* sum(12,3) //Sonucu göremedik return ü yakala
let toplam = sum(12,3)
console.log('Result : ',toplam);
console.log(sum(12,3)); 
console.log(sum(13,5)+5);*/
/* function sum(){
    // return ('selam');
    console.log('Selam');
}
console.log(typeof sum()); */
/* function addTwo(number){
    return +number/2 // + ile  gelen stringi number  yapıyoruz
    // Number(number) type conversion
}
console.log(addTwo('6'));
 */
// selam('Mark')
/* function selam (name = 'New User') {
    console.log(`Hello ${name}`);
}
// selam('Edward')
// selam('Hasan')
selam()
selam('Yunus') */
// DRY Don't Repeat Yourself
/* function sayHi(myName){
    console.log(`Hello ${myName}`);
    myName = 'Ed'
    console.log(`Hello ${myName}`);
}
let myName = 'Eren';
sayHi(myName)
console.log('Outside function', myName); */
/* let student = {};
student.name = 'Mark'
function sayHi2(student){
    console.log(`Hello ${student.name} entry point`);
    student.name ='John';
    console.log(`Hello ${student.name} first point`);
    student = {name : 'Leon'};
    console.log(`Hello ${student.name} inside function`);
}
sayHi2(student)
console.log(`Hello! ${student.name} from outside`);  */
/* function div (num1, num2){
    // console.log(num1/num2);
    if(num2 === 0) return ("Zero Division Error");
    return (num1/num2);
}
console.log(div(12,0)); */
// function div2(num1,num2){
//     return num2 ? num1 / num2 : 'Zero Division Error'
// }
// console.log(div2(18,3));
/* function sum() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
} */
// console.log(sum(1, 2, 3, 4, 7));
// function sum2(a,b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a+b
// }
// console.log(sum2(1,2,3,4,5));
/* function sayHi1(){
    return 'Hello from sayhi1'
}
console.log(sayHi1()); */
/* const sayHi2 = function(a,b){
    return a+b
}
console.log(sayHi2(3,6)); */
// console.log(greet()); // isimle gelmez
/* const pascalNumber = function total (n){ //4+3+2+1
    if(n===1) return 1;
    return n + total(n-1)
}
// console.log(pascalNumber(4));
console.log(typeof pascalNumber); */
//Immediaetly invoked function expression
// function hello(){
//     console.log('Hello World');
// }
// hello()
/* function sum(a,b){
    console.log(a+b);
}
sum(12,3) */
// function sum(a,b){
//     return (a+b);
// }
/* sum(12,3) //Sonucu göremedik return ü yakala
let toplam = sum(12,3)
console.log('Result : ',toplam);
console.log(sum(12,3)); 
console.log(sum(13,5)+5);*/
/* function sum(){
    // return ('selam');
    console.log('Selam');
}
console.log(typeof sum()); */
/* function addTwo(number){
    return +number/2 // + ile  gelen stringi number  yapıyoruz
    // Number(number) type conversion
}
console.log(addTwo('6'));
 */
// selam('Mark')
/* function selam (name = 'New User') {
    console.log(`Hello ${name}`);
}
// selam('Edward')
// selam('Hasan')
selam()
selam('Yunus') */
// DRY Don't Repeat Yourself
/* function sayHi(myName){
    console.log(`Hello ${myName}`);
    myName = 'Ed'
    console.log(`Hello ${myName}`);
}
let myName = 'Eren';
sayHi(myName)
console.log('Outside function', myName); */
/* let student = {};
student.name = 'Mark'
function sayHi2(student){
    console.log(`Hello ${student.name} entry point`);
    student.name ='John';
    console.log(`Hello ${student.name} first point`);
    student = {name : 'Leon'};
    console.log(`Hello ${student.name} inside function`);
}
sayHi2(student)
console.log(`Hello! ${student.name} from outside`);  */
/* function div (num1, num2){
    // console.log(num1/num2);
    if(num2 === 0) return ("Zero Division Error");
    return (num1/num2);
}
console.log(div(12,0)); */
// function div2(num1,num2){
//     return num2 ? num1 / num2 : 'Zero Division Error'
// }
// console.log(div2(18,3));
/* function sum() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
} */
// console.log(sum(1, 2, 3, 4, 7));
// function sum2(a,b, ...args) {
//     console.log(args);
//     console.log(arguments);
//     return a+b
// }
// console.log(sum2(1,2,3,4,5));
/* function sayHi1(){
    return 'Hello from sayhi1'
}
console.log(sayHi1()); */
/* const sayHi2 = function(a,b){
    return a+b
}
console.log(sayHi2(3,6)); */
// console.log(greet()); // isimle gelmez
/* const pascalNumber = function total (n){ //4+3+2+1
    if(n===1) return 1;
    return n + total(n-1)
}
// console.log(pascalNumber(4));
console.log(typeof pascalNumber); */
//Immediaetly invoked function expression
// let result =(function triangle(num){
//     if(num === 1) return 1;
//     return num+ triangle(num-1);
//     })(6);
// // console.log(result);
// // result()
// (function (n){
//     var sum = 0;
//     while (n>=0){
//         sum += n;
//         n--;
//     }
//     console.log('result : ', sum);
// })(4);