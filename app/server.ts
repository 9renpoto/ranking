import { createServer } from 'http'
import next from 'next'

const app = next({ dev: process.env.NODE_ENV !== 'production' })

app.prepare().then(() => {
  createServer().listen(3000)
})
