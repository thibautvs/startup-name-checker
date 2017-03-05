const http = require('http')
const chalk = require('chalk')
const config = require('./config.json')
const log = console.log

if (process.argv.length !== 3) {
  log(chalk.red('Wrong number of arguments. Expected 1 argument: name.'))
  return
}

checkDomainNames()
checkSocialMediaHandles()

function checkDomainNames() {
  log(chalk.underline.bold('Domain names'))
  const name = process.argv[2]
  log(config.domains)
}

function checkSocialMediaHandles() {
  log(chalk.underline.bold('Social media'))
  log(config.social)
}
