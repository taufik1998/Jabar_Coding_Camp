// Soal no 2

var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 

function membaca(waktu, books, index) 
{
    readBooks(waktu, books[index], function(time) {
        const nextBook = index + 1; if (nextBook < books.length) { membaca(time, books, nextBook);
        }
    });
}

return membaca(10000, books, 0);


