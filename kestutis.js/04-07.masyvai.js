/*
1. Sukurti masyą, kurio ilgis 20, o reikšmės – skaičiai, nuo 1 iki 20.
*/

let a = [];

for(let i = 1; i <= 20; i++){
    a.push(i);
}

console.log(a); 

/*
2.Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
*/

let b = [];
const randomLength = 40 + Math.floor(Math.random() * 20) ;

for(let i = 1; i <= randomLength; i++){
    b.push(i);
}

console.log(b); 

/*
3.Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15, o reikšmės –atsitiktiniai skaičiai nuo 5 iki 47.Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
*/

let masyvas = [];
let max = 5;

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
} 
for (let i = 0; i < rand(10,15); i++) {
    masyvas.push(rand(5, 47));
}
console.log(masyvas);

for (let i = 0; i < masyvas.length; i++){
    if (masyvas[i] > max){
        max = masyvas[i];
    }
}
console.log('max: ' + max);

/*
4.Sukurti masyvą, kurio ilgis 100, o reikšmės –raidės D, E, F, G, H. 20.
*/

const r = ['M', 'N', 'O', 'P'];
let c = [];

for(let i = 1; i <= 100; i++){
    c.push(r[rand(0,3)]);     //raides masyve
}

console.log(c); 

/*
5.Sukurti masyvą, kurio ilgis 100, o reikšmės –raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
*/

const raides = ['M', 'N', 'O', 'P'];
const masyvas1 = [];
for (let i = 1; i <= 100; i++) {
    masyvas1.push(raides[rand(0,3)]);
}
console.log(masyvas1);

let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;

for (let i = 0; i < masyvas1.length; i++) {
    if (masyvas1[i] === 'M'){
        countM++;
    }
    if (masyvas1[i] === 'N'){
        countN++;
    }
    if (masyvas1[i] === 'O'){
        countO++;
    }
    if (masyvas1[i] === 'P'){
        countP++;
    }
}
console.log(`Raidžių masyve yra: M: ${countM}, N: ${countN}, O: ${countO}, P: ${countP}`);

/*
6.Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra –nesikartoti.
*/

let d = [];
for(let i = 1; i <= 20; i++){
    let g = 10 + Math.floor(Math.random() * 50);
    if(d.indexOf(g) === -1) d.push(g);
}
console.log(d);