/**
 * This file is required to disable serverless functions
 * When using serverless functions, you are unable to use socket.io
 *
 * The rest of the application is just like a normal next app, so if you
 * don't plan to modify here, ignore this
 */

import express from 'express'
import { createServer } from 'http'
import type { AddressInfo } from 'net'
import next from 'next'
import { parse } from 'url'

import { env } from '@/env/env'

import { log } from './log'

const PORT = env.PORT || 3000
const DEVELOPMENT = env.NODE_ENV !== 'production'

const nextApp = next({ dev: DEVELOPMENT })
const nextHandle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()
  const server = createServer(app)

  app.all('*', (req, res) => {
    const parsedUrl = parse(req.url || 'localhost:3000', true)
    nextHandle(req, res, parsedUrl)
  })

  server.listen(PORT, () => {
    const { port } = server.address() as AddressInfo

    log.info(
      `Server listening at http://localhost:${port} as ${process.env.NODE_ENV}`
    )
  })
})
