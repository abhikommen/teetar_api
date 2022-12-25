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

twintRouter.get('/fetch/:userId', async (req, res) => {
  res.send(await fetchTweets(req.params.userId))
})

export default twintRouter