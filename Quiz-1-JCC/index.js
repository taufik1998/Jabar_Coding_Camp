// soal no 1

function jumlah_kata(str) { 
    return str.split(" ").length;
  }
  
var kalimat_2 = "Saya Iqbal"

console.log(jumlah_kata(kalimat_2));

// soal no 2

function next_date(tanggal, bulan, tahun) {
    var format = {year: 'numeric', month: 'long', day: 'numeric' };
    const tglBaru = new Date(tahun, bulan-1, tanggal+1);
    console.log(tglBaru.toLocaleDateString("id", format));
}
next_date(28, 2, 2021);

var tanggal = 28
var bulan = 2
var tahun = 2021

