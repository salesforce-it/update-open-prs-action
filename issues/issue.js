const githubContext = JSON.parse(process.env.GH_CONTEXT)
const github = require('@actions/github');
const octokit = github.getOctokit(githubContext.token)

/**
 * Update an issue with the provided milestoneNumber
 * @param {string} issueNumber number of the pull request to be updated
 * @param {string} milestoneNumber the number of the milestoneNumber to associate this issue with
 */
async function updateIssueWithMilestone(issueNumber, milestoneNumber) {
    const owner = githubContext.repository.split('/')[0]
    const repo = githubContext.repository.split('/')[1]
    return await octokit.issues.update({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        milestone: milestoneNumber
    });
}

module.exports = {updateIssueWithMilestone}