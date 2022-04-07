for (let num = 10; num >= 0; num--) {
    console.log(num);
}




let total = 0;
for (let num = 100; num >=0; num--) {
    total =  total + num;
}
console.log(total)






let number = 0;
while(number <= 10) {
    console.log(number);
    number++
}





let sum = 0; // store all the addition of numbers //final value
let numeris = 0;

while(numeris < 10) {
    sum += numeris;
    numeris++;
}
console.log(sum)






let random = ['apple', 3.14, 9999, true, false, undefined, ['cat', 'ball'], 3, 2, 'bla'];
console.log(random);
//normal while loop with array
/*
let x = 0;
while (x < random.length) {
    console.log(random[x]);
    x++
}
*/
//reverse
let x = random.length - 1 ;
while (x >= 0) {
    console.log(random[x]);
    x--
}

let cars = ['lambo', 'bmw', 'tesla'];
let hah = 0;
while (hah < cars.length) {
    console.log(cars[num]);
    num++;
}


console.log('--------')
let getRandomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
         getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom
}
console.log(getRandomNumber(5, 10));