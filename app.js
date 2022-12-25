import express from 'express'

import bodyParser from "body-parser"

import searchRouter from './apis/routes/search.js'
import twintRouter from './apis/routes/twint.js'

const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', searchRouter)
app.use('/twint', twintRouter)

app.listen(process.env.PORT || 3000)