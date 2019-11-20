const getRepoInfo = require('git-repo-info')

const setBranchEnvironment = () => {
  const { branch } = getRepoInfo()
  console.log('BRANCH', branch)
  console.log('BRANCH Gatsby', process.env.GATSBY_CMS_BRANCH)
  console.log('BRANCH netlify', process.env.BRANCH)
  console.log('HEAD netlify', process.env.HEAD)
  console.log('NETLIFY', process.env.NETLIFY)
  if (process.env.NETLIFY) {
    process.env.GATSBY_CMS_BRANCH = process.env.HEAD
    return process.env.HEAD
  } else {
    process.env.GATSBY_CMS_BRANCH = branch
    return branch
  }
}

module.exports = setBranchEnvironment
