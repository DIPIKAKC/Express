import express from 'express'

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



// APP.LISTEN(port, hostname,backlog)
//req k aayo bhanera check garna 'listen'. so we can send the response accordingly
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Click to navigate: http://localhost:${port}`)
})