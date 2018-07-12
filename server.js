let express = require('express')
let bodyParser = require('body-parser')
let request = require('request')
let cors = require('cors')

let app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/first', function(req,res){
    request('https://murmuring-reef-44114.herokuapp.com/signin',function (error, response, body){
        if(response && response.statusCode === 200){
            res.send(body)
        }
    })
})

app.post('/second', function(req,res){
    request.post({
        headers: {'Accept':"application/json",
                'Content-Type':"application/json"
            },
        url:     'https://murmuring-reef-44114.herokuapp.com/signin',
        body:    JSON.stringify(req.body)
      }, function(error, response, body){
        if(response && response.statusCode === 200){
            res.send(body)
        }
      });
})

app.listen(5000);