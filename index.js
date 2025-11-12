import express from 'express'
import fs from "fs"

const app = express();
const port = 5000;

//server run and listening
//api
//middleware


// APP.GET(path if.e. baseurl,k garne)
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
    const data = fs.readFileSync('./data.json','utf-8')
    console.log(data)
    return res.status(200).json({ status: 'success', data:JSON.parse(data) }) //json parse because paila data string ma aaucha ani teslai object ma convert gareko
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