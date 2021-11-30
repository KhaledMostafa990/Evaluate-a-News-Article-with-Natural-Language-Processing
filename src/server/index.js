var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// console.log(__dirname)
// app.get('/', function (req, res) {
//     // res.sendFile('dist/index.html')
//     res.sendFile(path.resolve('src/client/views/index.html'))
// })

const app = express()
app.use(express.json());
app.use(express.static('dist'))

const API_KEY = process.env.API_KEY
const API_URL = 'https://api.meaningcloud.com/sentiment-2.1?'


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

