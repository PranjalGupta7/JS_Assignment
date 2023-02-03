const f1 = (data) => {
    console.log(data);
};
const f2 = (data) => {
    console.log(data);
};
const f3 = (data) => {
    console.log(data);
};
const f4 = (data) => {
    console.log(data);
};
// f1(function (data, err) {
//     console.log(data);
//     f2(function (data) {
//         console.log(data);
//         f3(function (data) {
//             console.log(data);
//             f4(function (data) {
//                 console.log(data);
//             });
//         });
//     });
// });
const myPromise = new Promise((resolve, reject) => f1('from f1'));
myPromise
    .then(f2('from f2')).catch((err) => f2('from f2'))
    .then(f3('from f3')).catch((err) => f3('from f3'))
    .then(f4('from f4')).catch((err) => f4('from f4'));
