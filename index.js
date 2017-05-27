import chalk from 'chalk'
import { check } from './app/checker'

if (process.argv.length !== 3) {
  console.error(chalk.red('Wrong number of arguments. Expected 1 argument: name.'))
  process.exit(1)
}

async function checkName() {
  const name = process.argv[2].replace(/\s/g, '')
  console.log(`Checking "${name}"\n`)
  await check(name)
  console.log(chalk.green('Done!'))
}

checkName()
