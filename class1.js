
// Copia de un objeto con assign sintaxis
const obj = { a: 1, b: 2, c: 3 };
const obj2 = Object.assign({}, obj, { c: 3 });

// Copia de un objeto con spread sintaxis
const obj = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj };

// Destructuring crea las variables en cada estructura nueva
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { d, e, f } = obj;

// String templates
const name = 'Juan';
const lastName = 'Gómez';
const nameCompleted = `${name} - ${lastName}`;

// Arrow Functions
const myFunc = (x, y) => { x + y };
const myFunc2 = () => { 'hola' };
const myFunc3 = (z) => x * 2;
const myFunc4 = (x, y, z) => { let a = x + y; let b = a + z; return a; };

// Default values
const myFunc = (a = 4, b) => a + b;
myFunc(undefined, 5);

// import
export const mod = (x) => x * 2;
import { mod as myMod } from mod;

// Map
const arr = [1, 2, 3, 4, 5, 6, 7];
const multipliedByTwo2 = arr.map(x => x * 2);
console.log(multipliedByTwo);

// Map with Objects
const people = [{ name: 'juan', lastName: 'gomez' },
{ name: 'jose', lastName: 'roa' },
{ name: 'ana', lastName: 'mafla' }];
const peopleFullNames = people.map(p => ({ ...p, fullname: `${p.name} ${p.lastName}` }));
console.log(peopleFullNames);

// Filters
const peopleFilter = peopleFullNames.filter(p => p.name.length <= 3);
const peopleFilter2 = peopleFullNames.filter(p => p.name.indexOf('j') > -1);

// Concat
const people2 = people.concat({ name: 'pedro', lastName: 'torres' });
