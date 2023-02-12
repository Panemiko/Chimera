import chalk from 'chalk'

export class Log {
  static info(...logs: string[]) {
    console.info(chalk.bold.green('>', logs))
  }

  static error(...logs: string[]) {
    console.error(chalk.bold.red('>', logs))
  }
}
