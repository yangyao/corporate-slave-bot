var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()

const axios = require('axios')
const {
    Telegram
} = require('telegraf')

const tg = new Telegram(process.env.BOT_TOKEN)

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/random-jokes', function(req, res) {
    axios.get('https://api.chucknorris.io/jokes/random').then(res => {
        const txt = res.data.value
        tg.sendMessage(process.env.GROUP_ID, txt)
    })
    res.send('Joke is delivered')
})

// Finally, start our server
app.listen(3000, function() {
    console.log('Telegram app listening on port 3000!')
})