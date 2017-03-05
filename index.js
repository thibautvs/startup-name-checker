import chalk from 'chalk'
import check from './checker'

if (process.argv.length !== 3) {
  console.log(chalk.red('Wrong number of arguments. Expected 1 argument: name.'))
  process.exit(1)
}

const name = process.argv[2].replace(/\s/g, '')
check(name)
console.log(chalk.green('\nDone!'))
