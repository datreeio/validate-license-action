# validate-license-action
Validate a license file is one of the allowed licenses

# Example Usage:
Use on a pull request event to make sure the repo has a valid license.

```

workflow "License validation flow" {
  on = "pull_request"
  resolves = ["validate license"]
}

action "validate license" {
  uses = "datreeio/validate-license-action@master"
  args = ["MIT,ISC"]
}

```

# Future work to be done:

1. Support getting license from file
1. Support custom license file name
1. Support ```*``` allowed license
1. Support checking the source branch and not only the master

