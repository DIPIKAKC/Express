import express from 'express'
import fs from "fs"
import { notAllowed } from './utils/notAlllowed.js';
import { createProduct } from './controllers/productController.js';
import router from './routes/productRoutes.js';

const app = express();

const port = 5000;

//server run and listening
//api
//middleware


// APP.GET(path i.e. baseurl,k garne)
//req-res callback
app.get('/', (req, res) => {

    //accessing query params
    // console.log(req.query)
    // const {dipika} = req.query;
    // console.log(dipika);
    //
    return res.status(200).json({
        status: 'success',
        data: 'Hi!! welcome to server'
    });
})


//Users get, post, delete, idfetch, update
app.get('/users', (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    console.log(data)
    return res.status(200).json({ status: 'success', data: JSON.parse(data) }) //json parse because paila data string ma aaucha ani teslai object ma convert gareko
})
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.status(200).json({ status: 'success' })
})




// APP.LISTEN(port, hostname,backlog)
//req k aayo bhanera check garna 'listen'. so we can send the response accordingly
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Click to navigate: http://localhost:${port}`)
})


//middleware- function that comes between response and request, incoming reqest lai filter garna use huncha middleware
//checks request data, if not valid error response, if valid redirects to particular route
const getWork = (req,res) =>{
    return res.status(200).json({data:'got middleware function to work'})
}

// app.use((req, res, next) => {
//     const {a}=req.query;
//     if (a*1) {     
//         next();
//         console.log('middleware',a)
//     } else {
//         return res.status(400).json({
//             status:'error',
//             message:'ERROR!!! middleware function. no query params on request'
//         })
//     }
// })

//as route is defined after the middleware fxn, it only works if the middleware logic is satisfied when request made
app.route('/api/middlewarework').get(getWork).all(notAllowed)

//This is the middileware that is used to automtically access and understand the incoming request/JSON  in the format we need i.e. JSobject
//always on top 
//eg:req.body
app.use(express.json());

const postWork = (req,res) =>{
    console.log(req.body)
    return res.status(200).json({data:'express.json worked'})
}
app.route('/api/middlewarework').post(postWork).all(notAllowed) //all(notallowed) le chai function ma/ route ma diyeko method bahek aru lai block garcha


//from routes
app.use(router);