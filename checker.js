import http from 'http'
import chalk from 'chalk'
import config from './config.json'

const checkDomainNames = (name) => {
  console.log(chalk.underline.bold('Domain names'))
}

const checkSocialMediaHandles = (name) => {
  console.log(chalk.underline.bold('Social media handles'))
}

const check = (name) => {
  checkDomainNames(name)
  checkSocialMediaHandles(name)
}

export default check
