import { createServer } from 'http'
import type { AddressInfo } from 'net'
import next from 'next'
import { parse } from 'url'

import { env } from '@/env/env'

const PORT = env.PORT || 3000
const DEVELOPMENT = env.NODE_ENV !== 'production'

const app = next({ dev: DEVELOPMENT })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url || 'localhost:3000', true)
    handle(req, res, parsedUrl)
  })

  server.listen(PORT, () => {
    const { port } = server.address() as AddressInfo

    console.info(
      `> Server listening at http://localhost:${port} as ${process.env.NODE_ENV}`
    )
  })
})
