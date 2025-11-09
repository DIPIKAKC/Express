// nodejs-js runtime environment

const array = [2, 2, 3, 4];

const total = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(total(array)); // 11


//async function
setTimeout(() => {
    console.log('async function hehe')
}, 3000);

//blockable
console.log('hi dipika')



//promise?
const some = new Promise((resolve, reject) => {
    resolve('hello')
});
some.then((data) => {
    console.log('success data')
}).catch((err) => {
    console.log(err)
})
console.log(some)
//resolve reject huda data k aako cha herna lai then/catch or try/catch or async/await


//axios
import axios from "axios";
const m = axios.get('http://jsonplaceholder.typicode.com/users');
m.then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err)
})
console.log(m)

//modules
import os from "os";
import fs from "fs";
import path from "path";

console.log(os.machine())
