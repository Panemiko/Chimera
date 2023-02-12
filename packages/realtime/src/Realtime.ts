import { Log } from '@chimera/log'

export interface DispatchParams {
  table: string
  action: string
}

export interface PrismaMiddlewareParams {
  model: string
  action: string
}

export type PrismaMiddlewareNext = (params: PrismaMiddlewareParams) => any

export type Observer = (params: DispatchParams) => any

export class Realtime {
  private observers: Observer[] = []
  private listeningActions = [
    'create',
    'createMany',
    'delete',
    'deleteMany',
    'update',
    'updateMany',
    'upsert',
  ]

  /**
   * Subscribes to receive the params when it is ran
   */
  async subscribe(observer: Observer) {
    this.observers.push(observer)
  }

  /**
   * Sends the params to all the observers
   */
  private dispatch(params: DispatchParams) {
    this.observers.forEach((observer) => {
      observer(params)
    })
  }

  /**
   * Needs to allow the preview feature `clientExtensions` on Prisma
   *
   * Use with `PrismaClient.$extends(Realtime.getRealtimePrismaExtension())`
   */
  getRealtimePrismaExtension() {
    const operationHandler = (params: {
      model: string
      operation: string
      args: any
      query: any
    }) => {
      const queryResult = params.query(params.args)

      let operationValid = false

      for (const listeningAction of this.listeningActions) {
        if (listeningAction === params.operation) operationValid = true
      }

      if (operationValid) {
        this.dispatch({ table: params.model, action: params.operation })
        Log.info('Database has changed. Emitting event')
      }

      return queryResult
    }

    return {
      name: 'Realtime',
      query: {
        $allModels: {
          $allOperations: operationHandler,
        },
      },
    }
  }
}
