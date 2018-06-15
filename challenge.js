const a = [1, 3, 4, 6, 12, 15, 23, 20];
const b = ['a', 'once a time', 'machine learning', 'beer', 'bear', 'beat'];
const c = [{ key1: 'abc' }, { key2: 1.2 }, { key3: false }, { key4: null }, { key5: undefined }, { key6: '' }];
const people =
    [{ name: 'juan', lastName: 'gomez', edad: 16 },
    { name: 'jose', lastName: 'roa', edad: 23 },
    { name: 'ana', lastName: 'mafla', edad: 75 },
    { name: 'pedro', lastName: 'torres', edad: 18 }];

// 1. Return a list with only odd numbers (for a).
const numbersOdd = a.filter(n => n % 2 !== 0);
console.log(numbersOdd);

// 2. Return a list with all values multiplied by 2 (for a).
const numbersmultipliedByTwo = a.map(n => n * 2);
console.log(numbersmultipliedByTwo);

// 3. Return a list with all the values that includes 'be' (for b).
const wordsIncludeBE = b.filter(w => w.indexOf('be') > -1);
console.log(wordsIncludeBE);

// 4. Return a list with all the false values (for c).
const listValuesFalse = c.map(v => Object.values(v)).filter(v => v === false);
console.log(listValuesFalse);

// 5. Menores de edad
const list1 = people.filter(p => p.edad < 18);
console.log(list1);

// 6. Mayores de edad
const list2 = people.filter(p => p.edad > 18);
console.log(list2);

// 7 . Adulto mayor > 65
const list3 = people.filter(p => p.edad > 65);
console.log(list3);