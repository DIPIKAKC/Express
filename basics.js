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
// const m = axios.get('http://jsonplaceholder.typicode.com/users');
// m.then((res) => {
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err)
// })
// console.log(m)

//try-catch
const m2 = async (req, res) => {
    try {
        const data = await axios.get("http://jsonplaceholder.typicode.com/users")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// m2()





//modules
import os from "os";
import fs from "fs";
import path from "path";

console.log(os.machine())


//importing
import { dipika } from "./data.js";
console.log(dipika);


//callback function
const greet = () => {
    console.log('hello jee')
}

const func = (func) => {
    func();
}
func(greet); //greet is callback- it is called after the func function



//file module

//READ
//sync
console.log('before file1')
const file1 = fs.readFileSync('./sample.txt','utf8'); //encoding=binary to normal ext
console.log(file1)
console.log('after file1')

//async
console.log('before file2')
const file2 = fs.readFile('./sample.txt','utf8',(err,data)=>{
console.log('file2:',err)
console.log('file2 data:',data)
});
console.log(file2)
console.log('after file2')

//WRITE
fs.writeFile('./newfile1.txt','hi dipika byeee','utf-8',(err)=>{
    console.log('if error:',err)
})

//APPEND
fs.appendFile('./newfile1.txt',"   i must be at last as i am APPENDED",'utf-8',(err)=>{
})

//DELETE
fs.unlink('./sample.txt',(err)=>{
})

// //SEE if a file is present
if(fs.existsSync('./sample.txt')){
    fs.unlink('./sample.txt',(err)=>{
        console.log(err)
    })
}else{
    fs.writeFile('./sample.txt','created','utf-8',(err)=>{   })
}


//create folder
fs.mkdir('./uploads',(err)=>{})

//remove folder
fs.rmdir('./uploads',(err)=>{})