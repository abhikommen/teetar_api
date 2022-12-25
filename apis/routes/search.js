import { Router } from 'express'

const searchRouter = Router()



searchRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

searchRouter.get('/', (req, res) => {
  res.send('Birds home page')
})

searchRouter.get('/about', (req, res) => {
  res.send('About birds')
})

export default searchRouter