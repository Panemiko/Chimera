import { Log } from '@chimera/log'
import type { Server as HttpServer } from 'http'
import { Server as SocketServer } from 'socket.io'

import type { Realtime } from './Realtime'

export class Server {
  io?: SocketServer

  constructor(httpServer: HttpServer) {
    this.setupSocketServer(httpServer)
  }

  subscribeToRealtime(realtime: Realtime) {
    realtime.subscribe((params) => {
      if (!this.io) throw new Error('Socket server undefined')

      this.io.emit('database-update', params)
    })
  }

  private setupSocketServer(httpServer: HttpServer) {
    this.io = new SocketServer(httpServer)

    this.io.on('connection', (socket) => {
      Log.info(`Socket ${socket.id} connected from realtime`)

      socket.on('disconnect', () => {
        Log.info(`Socket ${socket.id} disconnected from realtime`)
      })
    })
  }
}
