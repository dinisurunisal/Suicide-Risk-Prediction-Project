// var express = require('express');
// var http = require('http');

// var app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(10000, () => console.log('Running on http://localhost:10000'));

// postData = JSON.stringify({
//   'code': 'base code or short string here'
// });

// var options = {
//     hostname: 'localhost',
//     port: 10001,
//     path: '/test',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': Buffer.byteLength(postData)
//     }
// };

// var req = http.request(options, (res) => {
//     var data = '';
//     res.on('data', (chunk) => {
//         data += chunk.toString(); // buffer to string
//     });
//     res.on('end', () => {
//         data = JSON.parse(data);
//         console.log(data.message);
//         console.log('No more data in response.');
//     });
// });

// req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
// });

// req.write(postData);
// req.end();

const express = require('express')
const axios = require('axios')
var cors = require('cors')
var bodyparser = require('body-parser'); // json


const app = express()
const port = 3000

const message = `Please send a GET request to /predict
`
app.use(cors()) // U

app.use(bodyparser.urlencoded({ //start to use body parser
  extended: true
  }));

  const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
  ];

  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }

  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));

  app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
  })

app.use(bodyparser.json());

app.post('/', (req, res) => {
  res.status(400).send(message)
})


app.post('/prediction', async (req, res) => {
  const { query } = req

    const prediction = await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/predict',
      withCredentials: true,
      crossdomain: true,
      data: query,
    }).catch(e => e)
    if (prediction instanceof Error) {
      console.log('the error', prediction)
      res.status(500).send('Sorry there is an error processing your request')
      return
    }
    res.send({ prediction: prediction.data })
    return
})

app.use('*', (req, res) => {
  res.status(400).send(message)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
