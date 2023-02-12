import { Log } from '@chimera/log'
import type { Realtime } from '@chimera/realtime'
import { Server as RealtimeServer } from '@chimera/realtime'
import type { Express } from 'express'
import express from 'express'
import { Server as HttpServer } from 'http'
import type { AddressInfo } from 'net'

export class Server {
  realtime: RealtimeServer
  app: Express.Application
  http: HttpServer

  constructor(realtime: Realtime) {
    this.app = express()
    this.http = new HttpServer(this.app)
    this.realtime = new RealtimeServer(this.http)

    // Adds the realtime instance registered on the database to the server
    this.realtime.subscribeToRealtime(realtime)
  }

  /**
   * Listens to the port given
   * @param port Port to listen to. Default to `3000`
   */
  listen(port = 3000) {
    this.http.listen(port, () => {
      // Gets the current server port
      const { port } = this.http.address as unknown as AddressInfo

      Log.info(`Server started on port ${port}`)
    })
  }
}
