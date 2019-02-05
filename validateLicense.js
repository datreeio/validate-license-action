const fs = require('fs')
async function main() {
  const event = JSON.parse(fs.readFileSync('/github/workflow/event.json', 'utf8'))
  console.log(event)
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
