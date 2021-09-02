// soal 1

var nilai = 90;

    if(nilai >= 85)
    {
        console.log("Indeksnya : A");
    }
    else if(nilai >= 75 & nilai < 85)
    {
        console.log("Indeksnya : B");
    }
    else if(nilai >= 65 & nilai < 75)
    {
        console.log("Indeksnya : C");
    }
    else if(nilai >= 55 & nilai < 65)
    {
        console.log("Indeksnya : D");
    }
    else if(nilai < 55)        
    {
        console.log("Indeksnya : E")
    }
    
// soal 2

var tanggal = 09;
var bulan = 04;
var tahun = 1998;
var TTL = 1;

switch(TTL) {
  case 1:   { console.log('09 April 1998'); break; }
  case 2:   { console.log('09 Mei 1998'); break; }
  case 3:   { console.log('09 Juni 1998'); break; }
  case 4:   { console.log('09 Juli 1998'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

 
  // soal 3
    n = 3

var s = '';
for(var i = 0; i < 3; i++)
    {
        for(var j = 0; j <= i; j++) {
            s += '#';
        }
        s += '\n';
    }
console.log(s);

    n = 7

var s = '';
for(var i = 0; i < 7; i++)
    {
        for(var j = 0; j <= i; j++) {
        s += '#';
        }
        s += '\n';
    }
console.log(s);    

// Soal 4

var m = 3;

    for(var angka = 0; angka <= m%3; angka++); 

var arr = ['I love programming', 'I love Javascript', 'I love VeuJS']
    for(var i = 0; i < arr.length; i++) 
    {
        console.log (angka++ +' '+ '-'+' '+ arr[i]);
    }

var z = '';
    for(var t = 0; t <= m%3; t++)
        {
            for(var j = 1; j <= i; j++) {
                z += '=';
            }
        }
    console.log(z);