// İF ELSE YAPILARI
//if (condition){sonuç;} elif(condition){sonuç;} else{sonuç;}
/* 
let score = 50;
if (score >= 50){     // koşulumuz: score 50 den büyük veya eşit ise 
    console.log("Congratulate"); // cong yazdır
}
*/
/*
let score = 50;
if (!(score >= 50)){  // koşulumuz: 50 den büyük veya eşik değil ise
    console.log("Congratulate"); 
}
*/
/*
let score = 50;  
if (score > 80) {           //koşulumuz: score 80 den büyük ise
    console.log("Tebrikler");
} else {                    // koşul tutmaz ise bunu yazdır
    console.log("Daha çok çalış");
}
*/
// TERNARY KISAYOL (İF-ELSE)
/*
let score = 50;
score > 80 ? console.log('Tebrikler'): console.log('Daha çok çalış');
*/ 
// "?" işareti bu koşul doğru mu anlamına gelir, yani if
/* 
let score = 80;  
if (score > 80) {
    console.log("Tebrikler");
} else if (score >=50){  // ara sorgu, elif anlamına gelir              
    console.log("Fena değil");
} else { 
    console.log("Daha çok çalış");
}
*/
/*
let score =prompt("Sınavdan kaç aldın?") //prompt("") ile kullanıcıdan bilgi aldık (input gibi)   
if (score > 80) {
    console.log("Tebrikler");
} else if (score >=50){  // ara sorgu, elif anlamına gelir              
    console.log("Fena değil");
} else { 
    console.log("Daha çok çalış");
}
*/
/*
let userName;
userName ? console.log(`Hello ${userName}`) : console.log("please login");
*/
//ternary ile username var ise hello yaz yoksa ise login yaptır sorgusu
// $ ile girilen username değerini yazdırırız. f string gibi
// TERNARY (İF ELSE ELSE İF)
/*
let score = 49;
score > 80 ? console.log('Tebrikler'): (score >= 50 ? console.log("fena değil") : console.log("Daha çok çalışmalısın"));
*/
// SWİTCH CASE STATEMENTS
// seçmeli olarak çıktı alabilme fonksiyonudur
// var text;
// var fruits = "Apple"; 
// fruits = fruits.toLocaleLowerCase(); // fruits değerinin tüm harflerini küçülttük (switch(fruits.toLowerCase() ile de yapabilirdik))
// switch (fruits){
//     case "banana": // koşul giriyoruz
//         text = "Banana is good"; // banana ise bunu ver
//         break; 
//     case "mango": //birden fazla case i tek yere bağlayabiliriz 
//     case "orange":
//         text = "I am not a fan of orange."; // orange ise bunu
//         break;
//     case "apple":
//         text = "How you like them apples?"; // apple ise bunu
//         break;
//     default:
//         text = "I have never heard of that fruit..."; //farklı bir cevapta bunu ver
//         break;
// }
// console.log(text);
//  ???? SORU ????
// bir gün değişkeni
// switchcase yapısı: pzt - çarş - perş - cmt ise inclass var 
// salı ve cuma ise TW var
/*
var text;
let gün1 = prompt("Gün giriniz: ");
gün = gün1.toLocaleLowerCase()
switch(gün){
    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        text = "Bugün in-class var";
        break;
    case "salı":
    case "cuma":
        text = "Bugün teamwork var";
        break;
    default:
        text = "tatil";
        break;
}
console.log(text);
*/
/* var a = '12';
var b = '3';
var result = a/b;

console.log(typeof result);

// console.log(a / b); //2

 */

// let x = 100 + 50 * 3; // 450? 250?
// console.log(x);

// Logical Operators && || !

/* Logical operators

OR ||			And &&				Not  !
0 0 -> 0		0 0 -> 0			0 -> 1
0 1 -> 1		0 1 -> 0			1 -> 0
1 0 -> 1		1 0 -> 0
1 1 -> 1		1 1 -> 1
 */

// let  x = 0 && false;
// console.log(x); 

// let y = 0 || false

// console.log(y);
// console.log(!y); //verilen değerin boolean tersini döndürür

// let password = 'passwo'


//.lenght stringin uzunluğunu verir
//.includes('@') true veya false
// console.log(password.length > 5 && password.includes('@'));


// let password = 'p@sswo'
// console.log(password.length >= 8 || password.includes('@') && password.length >5 );


//Nullish operator

// var a = null

// console.log(a ?? 'Hello'); // null vs text output text
// console.log(a ?? 2); // null vs text output text

// var a;

// console.log(a ?? 'Hello'); // undefined vs text output text
// console.log(a ?? 2); // undefined vs text output text

// var a = '';

//  console.log(a ?? 2); // boş string vs text output text


//If else yapıları

// let score = 70;
// console.log(score >= 50);

// if (score >= 50){
//     console.log('Tebrikler');
// }

// if (score >= 50) console.log('Tebrikler2');

// if (score > 80) {
//     console.log('Tebrikler');
// }else{
//     console.log('Daha cok calismalisin');
// }


// //Ternary Operatör  condition ? exprIfTrue : exprIfFalse
// score > 80 ? console.log('Tebrikler2') : console.log('Daha cok calismalisin2');

// let score = 81;
/* 
let score = prompt("Sınavdan kaç aldın ? "); //notu kullanıcıdan al

if (score > 80) {
    console.log('Tebrikler');
}else if (score >=50){
    console.log('Fena degil');
}else{
    console.log('Daha cok calismalisin');
}

// console.log('if else gayet kolay') */

// let userName = null;

// userName ? console.log(`Hello ${userName}`) : console.log('Please login');

//if else if ternary

// let score = 49
// score > 80 ? console.log('Tebrikler') :  score >= 50 ?console.log('Fena  değil') :console.log('Daha cok calismalisin');


//Switch Case Statements

// var text;
// var fruits2 = 'lemon'; // ===
// fruits = fruits2.toLowerCase();

// switch (fruits){
//     case "banana":
//         text = "Banana is good";
//         break;
//     case "lemon":
//     case "orange":
//         text = "I am not a fan of orange.";
//         break;
//     case "apple":
//         text = "How you like them apples?";
//         break;s
//     default:
//         text = "I have never heard of that fruit...";
//         break;
    
// }
// console.log(text);
// console.log(fruits2,text);

//toLowerCase()

// Bir gün değişkeni 
// Switch case pzt - çarş -perş -cmt in class
// salı  ve cuma ise TW var
// Pazar tatil


/* //8114 - Lütfullah
var text ;
var day = 'pazartesi';
// var day = prompt("Gün giriniz: ");
// day = day.toLowerCase();
switch(day) {
    case "pazartesi" "çarşmaba","perşembe","cumartesi":
        text = "In Class";
        break;
    case "salı","cuma":
        text = "Workshop";
        break;
    default:
        text = "Tatil";
}
console.log(text)
 */

//8251 Hasan Furkan
/* 
var text;
        var today = "sali";
        switch (today) {
            case "pazartesi":
            case "carsamba":
            case "persembe":
            case "cumartesi":
                text = "In class var";
                break;
            case "sali":
            case "cuma":
                text = "Teamwork var";
                break;
            case "pazar":
                text = "tatil";
                break;
        }
        console.log(text);
 */

//8487 kc
/* 
*/

/* //8107 Burcu
let gün = "perşembe";
switch (gün){
    case "pazartesi" || "çarşamba" || "perşembe" || "cumartesi" :
        text = "in class";
        break;
    case "salı" || "cuma" :
        text =  "TW var";    
        break;
    default:
        text ="tatil";
}
console.log(text);
 */


//8187 İsmail
/* var day = prompt("Bugün günlerden ne?")
switch (day.toLocaleLowerCase()) {
    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        console.log("In-class");
        break;
    case "salı":
    case "cuma":
        console.log("Teamwork/workshop");
        break;
    default:
        console.log("tatil");
        break;
} */


/* //8173 Daniel
var days = prompt("Bugün günlerden ne ? "); 
var text;
// var days;
days = days.toLowerCase();
switch (days){
    case "pzt, çarş, perş, cumt":
        text = "In class";
        break;
    case "salı, cuma":
        text = "workshop.";
        break;
    default:
        text = "Holiday";
}
console.log(text);

 */

/* var days = ‘pazartesi’;
var text;
switch (days.toLowerCase()){
	
	case ‘pazartesi’:
	case ‘çarşamba’:
	case ‘perşembe’:
	case ‘cumartesi’:
		text = ‘Bugün in class var’;
		break;
	case ‘salı’:
	case ‘cuma’:
		text = ‘Bugün pre class var’;
		break;
	case ‘pazar’:
		text= ‘Bugün Pazar’
		break;
	default:
		text= ‘Lütfen uygun girdi yapınız.’
		break;
}
console.log(text) */
