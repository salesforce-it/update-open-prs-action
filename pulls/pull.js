const githubContext = JSON.parse(process.env.GH_CONTEXT)
const github = require('@actions/github');
const octokit = github.getOctokit(githubContext.token)

/**
 * Get open pull requests in the repository that triggered this action
 */
async function getOpenPullRequests() {
    const owner = githubContext.repository.split('/')[0]
    const repo = githubContext.repository.split('/')[1]
    console.log(`Fetching pull requests for ${githubContext.repository}`);
    const {data: openPRs} = await octokit.pulls.list({
        owner: owner,
        repo: repo,
        state: 'open'
    });
    const openPullRequestTitles = openPRs.map(openPR => openPR.title);
    console.log(`Found open PRs: ${JSON.stringify(openPullRequestTitles)}`);
    return openPRs;
}

module.exports = {getOpenPullRequests}