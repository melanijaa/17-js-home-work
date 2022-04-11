/*
1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas  –„Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
*/

const n = -6;

if ( n > 0) {
    console.log('Skaičius geras.');
} else if ( n < 0 ) {
    console.log('Skaičius blogas');
} else {
    console.log('n lygu nulis');
}

/*
2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą p, 1-žalia, 2-geltona, 3-raudona. Pasitikrinkite: Kai p= 2, turėtume gauti: Palaukite.
*/

const šviesoforas = 2;

if (šviesoforas === 1) {
    console.log('Eikite');
}
if (šviesoforas === 2) {
    console.log('Palaukite');
}
if (šviesoforas === 3) {
    console.log('Eiti draudžiama');
}

/*
3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos tepla į dėžes.; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.
*/

const d = 3;
const k = 18;
const nu = 9;

if (k <= d * nu) {
    console.log('Knygos tepla į dėžes.')
} else {
    console.log('Knygos netelpa į dėžes.')
}

/*
4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.
*/

let a = 13;
let b = 13;

if (a > b) {
    a--;
    b++;
    console.log(`${a} > ${b}`);
} else if (a < b) {
    a++;
    b--;
    console.log(`${a} < ${b}`);
} else {
    console.log('Skaiciai yra lygus.');
}

/*
5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų f nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.
*/

const sutaupė = 70;
const ledųKaina = 10;

console.log('Saulius gales nusipirkti ' + Math.floor(sutaupė/ledųKaina) + ' porcijas ledu ir jam liks ' + (sutaupė % ledųKaina) + ' centu ');

/*
6. Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.
*/

const degtukai = 12;

if (degtukai % 3 === 0 && degtukai > 0) {
    console.log('Trikampį sudėlioti galima.')
} else {
    console.log('Trikampį sudėlioti negalima.')
}

/*
7. Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28).
*/

const men = 9;
if (men === 2){
    console.log('28');
} else if (men === 4 || men === 6 || men === 9 || men === 11) {
    console.log('30');
} else {
    console.log('31');
}

/*
8.Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“.Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/

const kauliukas = 1;

if (kauliukas % 2 === 1) {
    console.log('Kambarį tvarkys jaunėlis.');
} else {
    console.log('Kambarį tvarkys vyresnėlis.');
}

/*
9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
*/

const metai = 2012;

if (metai % 4 === 0) {
    const nunu = 1 + ((metai - 1896) / 4);
    console.log(`${metai} metais vyko ${nunu}-os rungtynes.`);
} else {
    console.log(`Metai neolimpiniai.`);
}

/*
10.Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.
*/

const v1 = 8;
const m1 = 29;
const m2 = 36;
const v3 = 9;
const m3 = 5;

if (v1 * 60 + m1 + m2 <= v3 * 60 + m3) {
    console.log('Petras į pamoką nepavėluos.');
} else {
    console.log('Petras į pamoką pavėluos.');
}



