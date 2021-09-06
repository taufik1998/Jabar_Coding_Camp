// Soal 1

//menghitung luas dan keliling persegi panjang

let  luas = (p,l) => { return p*l;};
console.log('Luasnya adalah',luas(20,10));

let  keliling = (p,l) => { return 2*(p+l);};
console.log('kelilingnya adalah',keliling(20,10));

// Soal 2

const newFunction = (firstName, lastName) => {
    return firstName + ' ' + lastName;
    }
console.log(newFunction('Taufik', 'Hidayat'));

// Soal 3

const newObject = {
    firstName: "Taufik",
    lastName: "Hidayat",
    address: "Subang",
    hobby: "Olahraga",
  }

const {firstName, lastName, address, hobby} = newObject

console.log(firstName, lastName, address, hobby);

// soal 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined);

// soal 5

const planet = "earth";
const view = "glass";
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log (before);