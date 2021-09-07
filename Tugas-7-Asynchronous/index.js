// soal 1

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
function membaca(time, books, i) {
    if (i < books.length) { readBooks(time, books[i], function (sisa) {
            if (sisa > 0) { i += 1; membaca(sisa, books, i); }    })
    }
}
return membaca(10000, books, 0);
