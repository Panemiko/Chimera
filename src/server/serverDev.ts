/**
 * This file is the development version of /src/server/server file
 *
 * Any production adjust must be done there.
 * This file is only responsible for running the websocket server
 */

import { applyWSSHandler } from '@trpc/server/adapters/ws'
import ws from 'ws'

import { log } from './log'
import { appRouter } from './routers/_app'
import { createContext } from './trpc'

const wss = new ws.Server({
  port: 3001,
})

const handler = applyWSSHandler({ wss, router: appRouter, createContext })

wss.on('connection', (ws) => {
  log.info(`Connection (${wss.clients.size})`)

  ws.once('close', () => {
    log.info(`Connection (${wss.clients.size})`)
  })
})

log.info('WebSocket Server listening on ws://localhost:3001')

process.on('SIGTERM', () => {
  log.info('SIGTERM')
  handler.broadcastReconnectNotification()
  wss.close()
})
