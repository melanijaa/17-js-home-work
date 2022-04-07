/*
1.Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
*/

const suma = (a, b) => a + b;
const ats = suma(2, 5);
console.log(ats);

/*
2.Parašyti funkciją, kuri priima du kintamuosius.Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.
*/

function compare (c, d) {
    if (c > d) {
        return `pirmas skaičius: "${c}", yra didesnis`;
    } else if (c < d) {
        return `antras skaičius: "${d}", yra didesnis`;
    } else if (c === d) {
        return `skaičiai yra lygus`;
    } else {
        return `ERROR`
    }
}
const rez = compare('friday', 6);
console.log(rez);

/*
3.Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
*/

function metai(m) {
    if (m % 4 === 0 && m % 100 !== 0 || 400 === 0) {
        return `${m} metai yra keliemieji.`;
    } else {
        return `${m} metai nėra keliemieji.`;
    }
}
const result = metai (2004);
console.log(result);

/*
4.Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
*/

const kvadratas = (e) => e * e;
const res = kvadratas(89);
console.log(res);

/*
5.Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
*/

function visuSkaiciuSuma (f) {
    if (f > 1) {
        let sum = 0;
        for (let i = 1; i <= f; i++) {
            sum += i;
        } return sum;
    }
}
console.log(visuSkaiciuSuma(100));

/*
6.Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
*/

function liekana(g) {
    let count = 0;
    for (let i = 0; i < g; i++) {
        if (g % i === 0 && i !== 1) {
            count++
        }
    }
    return `Skaičius ${g} be liekanos dalinasi iš ${count} sk.`
}
console.log(liekana(37485));

/*
7.Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą. Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį(simbolių kiekį).
*/

function tekstoIlgis (tekstas1) {
    return `Sakinys - "${tekstas1}", turi ${tekstas1.length} simboliu.`
}
console.log(tekstoIlgis('Bananai, mandarinai ir obuoliai yra nemėgstamiausi mano mamos vaisiai'));

/*
8.Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį–masyvą su 10 skaičių jame. Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
*/

const n = [3, 7, 0, 6, 0, 6, 5, 3, 9, 1];
function telefonoNumeris(n) {
    return `Mano telefono numeris yra (${n[0]}${n[1]}${n[2]})${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}.`
} 
console.log(telefonoNumeris(n))

/*
9.Parašyti funkciją, kuri priimtų du kintamuosius-tekstus.Palyginti kuris tekstas yra ilgesnis.
*/

function text (text1, text2) {
    if (text1 > text2) {
        return 'Pirmas tekstas yra ilgesnis.';
    } else if (text1 < text2) {
        return 'Antras tekstas yra ilgesnis.';
    } else if (text1 === text2) {
        return 'Abu tekstai yra lygūs.';
    } else {
        return `ERROR`
    }
}
const atsText = text('Ananasas ir arbūzas yra mano mamos mėgstamiausi vaisiais.', 'Bananai, mandarinai ir obuoliai yra nemėgstamiausi mano mamos vaisiai.');
console.log(atsText);

/*
10.Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą.Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
*/

const tekstas2 = ('Ananasas ir arbūzas yra mano mamos mėgstamiausi vaisiais.');
function count(tekstas2) {
    let count = 0;
    for (let i = 0; i < tekstas2.length; i++) {
        if((tekstas2[i] === 'A' || tekstas2[i] === 'a'))
        count++
    } return `Tekste yra ${count} "a" raidžių`
}

console.log(count(tekstas2));

//pornografija
/*
function suskaiciuok2(tekstas2) {
    const container = {};
    for (let i = 0; i < tekstas2.length; i++) {
        const a = tekstas2[i];
        container[a] = (container[a] || 0) + 1
    }
    return container;
}
*/