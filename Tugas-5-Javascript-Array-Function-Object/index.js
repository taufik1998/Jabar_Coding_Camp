// Soal 1

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
    
    daftarHewan.sort()
    for(var i = 0; i < daftarHewan.length; i++) 
    {
        console.log (daftarHewan[i]);
    }

// Soal 2

function introduce(perkenalan) {
    var perkenalan = "Nama saya " + perkenalan.name +
                     ", umur saya " + perkenalan.age + 
                     " tahun, alamat saya di " + perkenalan.address + 
                     ", dan saya punya hobby yaitu " + perkenalan.hobby +
                     "!"
    return perkenalan;
  }
var data = {name : "Taufik" , age : 23 , address : "Subang" , hobby : "Olahraga" }
 
var perkenalan = introduce(data)
    console.log(perkenalan)

// Soal No 3

function hitung_huruf_vocal(str) 
{
	var hitung = 0;
	var vocal = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < str.length; i++) 
    {
		for (var j = 0; j < vocal.length; j++) 
        {
			if (str[i] === vocal[j]) {
				hitung++;
			}
		}
	}
	return hitung;
}

var hitung_1 = hitung_huruf_vocal('Taufik');

var hitung_2 = hitung_huruf_vocal('Hidayat');

console.log(hitung_1 , hitung_2)

// Soal 4

function hitung(p){
     return p*2-2
}

console.log( hitung(0) ); 
console.log( hitung(1) );
console.log( hitung(2) );
console.log( hitung(3) );
console.log( hitung(5) );
