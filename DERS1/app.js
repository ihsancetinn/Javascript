var a = 10; // ; zorunlu değildir
n1 = n2 = 10  // scriptten sağdan sola gider, 10 önce 2 ye sonra n1 e atandı ikisi de 10 oldu
// naming rules (örnek değişken isimleri)
// camelCase  *normal değişkenleri böyle tanımlarız*
// ONEMLİDEGISKEN *önemli değişkenleri böyle atarız*
// PascalCase
// UpperCamelCase
// snake_case
// SCREAMING_SNAKE_CASE
// camel_Snake_Case
// kebab-case
// Train-Case
// JavaScript Reserved Words (yasaklı değişken kelimeleri) kontrol edilmeli
// let ve const ES6 ile gelen iki özelliktir
console.log("Hello Clarusway"); // consoleda yazı yazdırıyoruz
console.info("some info"); // console da bilgi verir
console.warn("some warning"); // console da uyarı verir
console.error("error!!"); // console da hata yerinin belirliyoruz, işaretliyoruz
// görünmeyen hataları (yanlış değişken adı vb.) işaretlemek için
//const and let
// const immutable kalıcı değişkenler atamaya yarar (büyük harfle yazıldıysa sabittir, küçük harfle yazıldıysa sabit olmayabilir *yazım kuralı* )
// let değiştirilebilir
// örn atama
const SECONDS_IN_A_DAY = 24 * 60 * 60; // bir gün boyunca süresi girdik ve önemli olduğu için büyük harfle yazdık, direkt 86400 yazsaydık ne rakamı olduğu anlaşılmazdı..
console.log(SECONDS_IN_A_DAY); // consolda yazdırdık
var country = prompt("Enter your country: "); // input gibi kullanıcıdan bilgi alıyor
console.log("Your country is", country); // consolda yazdırıyor
// var ile let arasındaki fark
// let ve const tanımlandığı yerden itibaren kullanılabilir/geçerlidir, var ise tam tersi durumda hata almaz ama çıktı undefined yazar
// var ile değişken yazılıp değer yazılmazsa undefined olur, const ve let hata verir
// var function scope, let ve const block scope
// let ile tanımlanan değişkeni tekrar tanımlamak istersek let siz (değişken=değer) şekilde tanımlamalıyız
// let ile tanımlanan bir değişken sonradan var kullanılarak tekrar değiştirilemez