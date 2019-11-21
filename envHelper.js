const gitRepoInfo = require('git-repo-info')

const setBranchEnvironment = () => {
  const { branch } = gitRepoInfo()
  if (process.env.NETLIFY) {
    process.env.GATSBY_CMS_BRANCH = process.env.HEAD
  } else {
    process.env.GATSBY_CMS_BRANCH = branch
  }
}

module.exports = {
  setBranchEnvironment,
}
