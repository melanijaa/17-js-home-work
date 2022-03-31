/*
Kintamųjų inicijavimas

1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
- Po kiekvieno jų inicijavimo, išvesti į console
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
- Po kiekvieno jų inicijavimo, išvesti į console
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
- Po kiekvieno jų inicijavimo, išvesti į console
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
- Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log('---1---')
const myLuckyNumberIs = 4;
console.log('Lucky number:', myLuckyNumberIs);

let apples = 3;
console.log('Apples in a basket:', apples);

const pinigine = 100;
console.log('Pinigine:', pinigine);

console.log('---2---')
const pavarde = 'Cruncky';
const pasisveikinimas = `Sveiki atvykę ${pavarde}.`;
console.log(pasisveikinimas);

const name = 'John';
const lastName = 'Smith';
const age = 79;
const homeTown = 'New York';
const giftBasket = `Resipient ${name} ${lastName} is ${age} years old from ${homeTown}`
console.log(giftBasket);

const billingAdress = 'Nature Valley, Hong Kong';
const billingDue = 2022-03-31;
const bill = `Billing adress is ${billingAdress} and it's due to ${billingDue}`;
console.log(bill);

console.log('---3---')
const pazymiai = [10, 4, 8, 9, 7];
console.log('Klases pazymiai:', pazymiai);

const cleanRooms = [102, 306, 707, 087, 01]
console.log('Clean rooms available:', cleanRooms);

const data = [2022, 03, 31];
const time = [09, 26]
const dataTime = `The time is ${time} and todays date is ${data}`;
console.log(dataTime);

console.log('---4---')
const fruits = ['banana', 'kiwi', 'apple', 'orange', 'pear'];
console.log('What fresh fruit do we have?', fruits);

const questslist = ['John Smith', 'Anaa Karenina', 'Jonas Brothers', 'Dua Lipa', 'Obama'];
console.log('What is the quest list for tonight?', questslist);

const computerBrands = ['Apple', 'Asus', 'Orion', 'Samsung', 'Lenovo'];
console.log('Computer brands we have:', computerBrands);

/*
Veiksmai su kintamaisiais

1. Susumuoti visus skaičiaus tipo kintamuosius
- Rezultatą išvesti į console
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
- Rezultatą išvesti į console
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
- 1-2+3-4+5
- Rezultatą išvesti į console
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log('---1---')
let a = 0;
a = a + 3;
a += 3;
console.log(a);

let b = 7;
b += 7;
console.log(b);

/*
Kintamųjų palyginimas
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
- kuris didesnis
- kuris mažesnis
- ar jie lygūs
- ar jie nelygūs
- kuris didesnis arba lygus
- kuris mažesnis arba lygus
2. Išvesti teksto tipo kintamųjų ilgius
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
- kuris didesnis
- kuris mažesnis
- ar jie lygūs
- ar jie nelygūs
- kuris didesnis arba lygus
- kuris mažesnis arba lygus
4. Išvesti sąrašo tipo kintamųjų ilgius
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
- kuris didesnis
- kuris mažesnis
- ar jie lygūs
- ar jie nelygūs
- kuris didesnis arba lygus
- kuris mažesnis arba lygus
*/

/*
Ciklo for panaudojimas
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
- 0 … 0
- 0 … 4
- 0 … 100
- 574 … 815
-  -50 … 50
-  -70 … 30
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
- pvz.: “abcdef” -> “fedcba”
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
- 0 - 11
- 8 - 31
-  -18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/


/*
Funkcijos

Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
*/ 

/*
1. Funkcija pavadinimu “tusciaFunkcija”:

- nepriima jokių kintamųjų
- neatlieka jokios vidinės logikos
- gražina boolean tipo reikšmę “false”
- TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

/*
Funkcija pavadinimu “daugyba”:

priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/

/*
Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:

- priima vieną kintamąjį
- jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
- priešingu atveju, funkcija tęsia darbą
- į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
- gražina skaitmenų kiekį
- TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1

console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3

console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11

console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”

console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:

priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

/*
Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/


/*
Funkcija pavadinimu “dalyba”:

- turi priimti du kintamuosius
- reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
gražinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/
