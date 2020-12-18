const core = require('@actions/core');
const issue = require('./issues/issue');
const pull = require('./pulls/pull');
const githubContext = JSON.parse(process.env.GH_CONTEXT)

try {
    console.log(`Repository: ${githubContext.repository}`);
    const newMilestone = githubContext.event.milestone;
    console.log(`Updating open PRs with new milestone: ${newMilestone.title}`)

    pull.getOpenPullRequests().then(openPRs => {
        openPRs.forEach(openPR => {
            issue.updateIssueWithMilestone(openPR.number, newMilestone.number)
                .then(() => console.log(`Finished adding milestone (${newMilestone.title}) to PR: ${openPR.title}`))
        })
    });
} catch (error) {
    core.setFailed(error.message);
}