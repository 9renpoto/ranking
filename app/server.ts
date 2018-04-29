import { createServer } from 'http'
import next from 'next'

import routes from './routes'

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(3000)
})
