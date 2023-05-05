let numbers= [23,'jitehs',56,67];

console.log(numbers)

let cars = ['honda','mercedes','hundai'];
console.log(cars);

console.log(cars[1]);

cars[1]= 'toyota';



cars.pop(cars);
console.log(cars);
cars.shift(cars);
console.log(cars);
cars.unshift('Maruti');
console.log(cars);
cars.unshift('Mitsubishi');
console.log(cars);
cars.splice(1,2);
console.log(cars);
cars.splice(2,0,'Maruti','Toyota');
console.log(cars);
cars.unshift('MG');
let sportsCars = cars.slice(0,3);
console.log(cars);

console.log(sportsCars);

let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];

let num = evenNumbers.concat(oddNumbers);

console.log(num);












