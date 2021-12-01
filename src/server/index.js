meaningCloudData = {}

const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const axios = require('axios')


const app = express()
app.use(express.json());
app.use(express.static('dist'))

const API_KEY = process.env.API_KEY
const API_URL = 'https://api.meaningcloud.com/sentiment-2.1?'


app.get('/test', function (req, res) {
    res.send(meaningCloudData)

})

app.post('/api',  (req, res)=> {
        let userUrl = req.body.validUrlInput;
        let callMeaningCloud = `${API_URL}key=${API_KEY}&url=${userUrl}&lang=en`;
        
        // Get Data from API
        axios.get(callMeaningCloud)
        .then((res)=> {
            const data = res.data
            // console.log(data);
            return data
        })
        .then((data)=> {
            // console.log(data.model);
            meaningCloudData['data'] = data;
            // Send res to post method
            res.send(meaningCloudData)
        })
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

