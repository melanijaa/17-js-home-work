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
    } else {
        return `skaičiai yra lygus`;
    }
}
const rez = compare(4, 6);
console.log(rez);

/*
3.Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
*/

function metai(m) {
    if (m % 4 === 0 && m % 100 !== 0) {
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
        for (let i = 0; i <= f; i++) {
            sum += i;
        } return sum;
    }
}

console.log(visuSkaiciuSuma(100));

/*
6.Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
*/

function liekana(g, h, j) {
    let count = 0;
    for (let i = g; i <= h; i++) {
        if (i % j === 0) {
            count++
        }
    }
    return `Sveikų skaičių intervale nuo ${g} iki ${h}, besidalijančių be liekanos (išskyrus vienetą ir patį save) iš ${j} yra ${count} vienetai.`;
}
console.log(liekana(0, 13, 3));

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

function telefonoNumeris (tel, efo, no) {
    return `Mano telefono numeris yra (${tel})${efo}-${no}`
}
console.log(telefonoNumeris(860, 653, 9177))

/*
9.Parašyti funkciją, kuri priimtų du kintamuosius-tekstus.Palyginti kuris tekstas yra ilgesnis.
*/

function text (text1, text2) {
    if (text1 > text2) {
        return 'Pirmas tekstas yra ilgesnis.';
    } else if (text1 < text2) {
        return 'Antras tekstas yra ilgesnis.';
    } else {
        return 'Abu tekstai yra lygūs.';
    }
}
const atsText = text('Ananasas ir arbūzas yra mano mamos mėgstamiausi vaisiais.', 'Bananai, mandarinai ir obuoliai yra nemėgstamiausi mano mamos vaisiai.');
console.log(atsText);

/*
10.Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą.Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
*/

function suskaiciuok(tekstas) {
    const container = {};
    for (let i = 0; i < tekstas.length; i++) {
        const a = tekstas[i];
        container[a] = (container[a] || 0) + 1
    }
    return container;
}

console.log(suskaiciuok('ananasas ir arbūzas yra mano mamos mėgstamiausi vaisiais.'));