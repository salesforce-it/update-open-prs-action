# Update Open Pull Requests
Update open pull requests when a new milestone is created with the new milestone

## Inputs

### none

## Outputs

### none

## Example usage
```yml
name: Update Open Pull Requests

on:
  milestone:
    types: [created]

jobs:
  update_prs:
    runs-on: ubuntu-latest
    steps:
      - name: Update open pull requests action step
        env:
            GH_CONTEXT: ${{ toJson(github) }}
        id: update-prs
        uses: salesforce-it/update-open-prs-action@v1
```
