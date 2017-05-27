import config from '../config'
import { isURLAvailable, logTitle, logAvailability } from './utils'

async function checkDomainNames(name) {
  logTitle('Domain names')
  for (const domain of config.domains) {
    const url = `http://www.${name}${domain}`
    const isAvailable = await isURLAvailable(url)
    logAvailability(isAvailable, domain)
  }
  console.log('')
}

async function checkSocialMedia(name) {
  logTitle('Social media')
  for (const socialMedia of config.social) {
    const url = socialMedia.url.replace('{startupName}', name)
    const isAvailable = await isURLAvailable(url)
    logAvailability(isAvailable, socialMedia.name)
  }
  console.log('')
}

async function check(name) {
  await checkDomainNames(name)
  await checkSocialMedia(name)
}

export { check }
