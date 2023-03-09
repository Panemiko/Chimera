/**
 * This file handles the production server
 *
 * Due to the use of websockets, the serverless feature of Next.js
 * is disabled
 *
 * This script isn't used on development server.
 * For this go to the /src/server/serverDev.ts file
 */

import { applyWSSHandler } from '@trpc/server/adapters/ws'
import express from 'express'
import { createServer } from 'http'
import type { AddressInfo } from 'net'
import next from 'next'
import { parse } from 'url'
import ws from 'ws'

import { env } from '@/env'
import { appRouter } from '@/server/routers/_app'
import { createContext } from '@/server/trpc'

import { log } from './log'

const PORT = env.PORT || 3000
const DEVELOPMENT = env.NODE_ENV !== 'production'

const nextApp = next({ dev: DEVELOPMENT })
const nextHandle = nextApp.getRequestHandler()

void nextApp.prepare().then(() => {
  const app = express()
  const server = createServer(app)

  const wss = new ws.Server({ server })
  const handler = applyWSSHandler({ wss, router: appRouter, createContext })

  process.on('SIGTERM', () => {
    console.log('SIGTERM')
    handler.broadcastReconnectNotification()
  })

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
