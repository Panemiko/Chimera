import { env } from './env/env'
import { realtime } from './realtime'
import { Server } from './Server'

const PORT = env.PORT

const server = new Server(realtime)

server.listen(PORT)
