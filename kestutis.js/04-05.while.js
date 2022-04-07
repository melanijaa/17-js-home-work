/*
1.Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.
*/

//neiseina padaryti, kad butu maziau 100
let a = 0;
while (a < 100) {
     let b = Math.floor(Math.random() * 10);
     a += b;
}
console.log(a)

/*
2.Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol sugeneruotų skaičių suma bus dali iš 7.
*/

let c = 0;
while (c % 7 !== 0 || c === 0) {
     let d = Math.floor(Math.random() * 10);
     c += d;
}
console.log(c)

/*
3.Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą –2, trečią –3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.

Kontroliniai duomenys:
Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).
Įveskite knygos skyrių skaičių: 17.Tadas visą knygą perskaitys per 6 dienas (-ų).Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).
*/

/*
4.Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.
*/

let e = 0;
while (e !== 5) {
     e = Math.floor(Math.random() * 10);
     console.log(e)
}

/*
5. Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.
*/

//sąlygoje parašyta, 5 arba 7, bet jei rašau (f !== 5 || f !== 7) tada ciklas varo be sustojimo.

let f = 0;
let g = 0;
while (f !== 5 && f !== 7) {
     f = Math.floor(Math.random() * 10);
     console.log(f)
     g++
}
console.log(`Prasisuko ${g} ciklas/ai.`)