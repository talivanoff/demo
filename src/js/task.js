// const array = [1, 2, 4, 5, 4, 66, 77, -4, 444, 33, -22, 6, 14];

// const res = array.filter((item) => item < 0)
// console.log(res);

const mas = [
    {
        name: "fgfg",
        age: 12
    },
    {
        name: "aaa",
        age: 14
    },
    {
        name: "bbb",
        age: 17
    },
    {
        name: "cccc",
        age: 16
    }

];




const res = (array) => array.filter(item => item.age > 15).map(item => item.age).sort();
console.log(res(mas));




// const mas = [1, 4, 99, 66, 68, -55, 34, 9];
// const seredina = (arr) => {
//         arr.sort((a, b) => a - b)
//         return  arr.length % 2 === 0 ? 
//                 arr[arr.length / 2 - 1] : 
//                 arr[(arr.length - 1) / 2];
//         }

//         console.log(seredina(mas));

// const sortirovka = (arr) => arr.sort((a, b) => a - b);
// console.log(sortirovka(mas));


// const arr = [];
// const mas2 = ['форд', 'мазда', 'мерседес', 'опель', 'бмв'];
// const res2 = (arr) => arr.filter(item => item.indexOf('о') !== -1)

// console.log(res2(mas2))


// const conc = (array) => array.join(' ');
// console.log(conc(mas));




// const word = array.map((item, i) => 'text') 
// console.log(word);

// const result = array.filter(item => item > 10);

// console.log(result);

// const result = array.map((item,i) => i % 2 === 0 ? 0 : item);

// console.log(result);
// let sum = 0;
// array.forEach(item => {
//     sum = sum + item;
// })


// console.log(sum);



// let max = array[0];
// array.forEach((item) => {
//     if (item > max) {
//         max = item;
//     }
// });
// console.log(max);

// const isTrue = array.some((item, i) => item > 100);
// console.log(isTrue ? '+100' : '-100');

// const isTrue = array.every((item, i) => item < 100);
// console.log(isTrue ? '-100' : '+100');

// const isTrue = array.every((item, i) => item < 100);
// console.log(isTrue ? '-100' : '+100');


// let res = '';
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 100) {
//        res = '+ 100'
//        return 
//     } else {
//        res = '- 100'
//     }

// }

