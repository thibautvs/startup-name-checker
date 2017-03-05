import http from 'http'
import chalk from 'chalk'
import config from './config.json'

const log = console.log

if (process.argv.length !== 3) {
  log(chalk.red('Wrong number of arguments. Expected 1 argument: name.'))
  process.exit(1)
}

checkDomainNames()
checkSocialMediaHandles()

function checkDomainNames() {
  log(chalk.underline.bold('Domain names'))
  const name = process.argv[2]
  log(config.domains)
}

function checkSocialMediaHandles() {
  log(chalk.underline.bold('Social media handles'))
  log(config.social)
}
