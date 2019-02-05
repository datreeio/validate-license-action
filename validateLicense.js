const program = require('commander')
const fs = require('fs')

program
  .option('-l, --licenses <validLicenses>', 'The list of valid licenses')
  .parse(process.argv)

async function main() {
  const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))
  const validLicenses = program.licenses.split(',').map(val => val.toLowerCase())
  let repoLicense
  if (event.repository.license) repoLicense = event.repository.license.key
  console.log(event)
  console.log(process.argv)
  console.log(validLicenses)
  console.log(repoLicense)


  if (repoLicense && validLicenses && validLicenses.includes(repoLicense.toLowerCase())) return 'Valid license'
  throw new Error(`The license ${repoLicense} is not valid in this repo`)
}

if (require.main === module) {
  main()
    .then(res => {
      console.log({ res })
      process.exitCode = 0
    })
    .catch(err => {
      console.log({ err })
      process.exitCode = 1
    })
}
