
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

