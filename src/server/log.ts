import chalk from 'chalk'

export const log = {
  info(...logs: string[]) {
    console.info(chalk.bold.green('>', logs))
  },
  error(...logs: string[]) {
    console.error(chalk.bold.red('>', logs))
  },
}
