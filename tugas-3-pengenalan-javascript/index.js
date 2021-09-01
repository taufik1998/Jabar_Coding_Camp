// Soal 1

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var kt1 = pertama.substring(0,4);
var kt2 = pertama.substring(12,18);
var kt3 = kedua.substring(0,7);
var kt4 = kedua.substring(8,18);
var upp = kt4.toUpperCase();

console.log(kt1,kt2,kt3,upp);

// Soal 2

var kataPertama = 10;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 6;

var OH = (kataPertama+kataKeempat)+(kataKedua*kataKetiga);

console.log(OH)

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24);  
var kataKelima = kalimat.substring(25, 31);  

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
