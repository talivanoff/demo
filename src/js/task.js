const array = [1, 2, 4, 5, 4, 66, 77, -4, 444, 33, -22, 6, 14];

const res = array.filter((item) => item < 0)
console.log(res);



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

