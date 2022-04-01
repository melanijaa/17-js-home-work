/*
1.Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
*/

for(let i = 0; i < 5; i++) {
    console.log('Labas');
}

/*
2.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).
*/

for(let i = 0; i <5; i++) {
    console.log(i);
}

/*
3.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).
*/

for(let i = 0; i <= 40; i+=10) {
    console.log(i);
}

/*
4.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).
*/

for(let i = 49; i <= 53; i++) {
    console.log(i);
}

/*
5.Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
*/

function rand(min, max){return Math.floor(Math.random()*(max-min+1)+min);}
for (let i = 0; i < 5; i++) {
     console.log(rand(0,10));
 }

/*
6.Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.
*/
console.log('------6-----------');

for(let i = 1; i <= 20 ; i++) {
    if(i % 3 !== 0){
       console.log(i);
    }
}

/*
7.Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
*/

let number = 4;
    
for (let i = 1; i <= 10; i++) {
    console.log(number, "X", i, "=", number * i);
}

/*
8.Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.
*/

let colis = 12;

for (let i = 1; i <= 12; i++) {
    console.log(i , 'coliu', '=', i * 2.54, 'cm');
}

/*
9.Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
*/

const palūkanuNorma = 2;
const metai = 10;
let indelis = 100;

for (let i = 1; i <= metai; i++) {
    const palūkanos = (Math.round(indelis * palūkanuNorma)) / 100;
    indelis += palūkanos;
    console.log(`Po ${i} metu indelis bus ${indelis.toFixed(2)}, o palukanos bus ${palūkanos}.`);
}

/*
10.Keliamieji metai turi 366 dienas, paprastieji–365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. Raskite visus mūsų eros keliamuosius metus.
*/

for (let m = 0; m <= 2022; m+=4) {
    if ( m % 4 === 0 && m % 100 !== 0 || m % 400 === 0 ) {
        console.log(`${m} yra keliamieji.`);
    } 
}

/*
else {
        console.log(`${m} nera keliamieji.`);
    }
*/