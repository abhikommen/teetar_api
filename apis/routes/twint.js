import { Router } from 'express'

const twintRouter = Router()

import fetchTweets from '../../services/fetchtweet.js'

twintRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

twintRouter.get('/', (req, res) => {
  res.send('Twint api home page')
})

twintRouter.get('/fetch/', async (req, res) => {

  const userNames = ["google", "facebook", "elonmusk", "amazon"]
  const item = []
  for(let item of userNames){
    item.push(... await fetchTweets(item))
  }
  res.send(item)
})

export default twintRouter