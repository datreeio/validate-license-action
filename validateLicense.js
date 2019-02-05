const program = require('commander')
const fs = require('fs')

program
  .option('-l, --licenses <validLicenses>', 'The list of valid licenses')
  .parse(process.argv)

async function main() {
  const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))
  const validLicenses = program.validLicenses
  const repoLicense = event.repository.license
  console.log(event)
  console.log(process.argv)
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
