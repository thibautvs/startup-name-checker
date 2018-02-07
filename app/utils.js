import fetch from 'isomorphic-fetch'
import chalk from 'chalk'
import config from '../config.json'

async function isURLAvailable(url) {
  let isAvailable
  try {
    const response = await fetch(url, {
      method: 'GET',
      timeout: config.requestTimeout
    })
    isAvailable = response.status === 404
  } catch (e) {
    if (e.code === 'ENOTFOUND') {
      isAvailable = true
    } else {
      console.error(chalk.red(e.message))
    }
  }
  return isAvailable
}

function logTitle(title) {
  console.log(chalk.underline.bold(`${title}\n`))
}

let symbols = {
  ok: '✓',
  err: '✗'
};

if ('win32' == process.platform) {
  symbols = {
    ok: '\u221A',
    err: '\u00D7'
  };
}

function logAvailability(isAvailable, msg) {
  console.log(`${isAvailable ? chalk.green(symbols.ok) : chalk.red(symbols.err)} ${msg}`)
}

export { isURLAvailable, logTitle, logAvailability }
