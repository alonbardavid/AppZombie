import preval from 'preval.macro';

const res = preval`
  const {execSync} = require('child_process')
  const gitHash = execSync("git rev-parse --short HEAD",{encoding:"UTF-8"});
  module.exports = {
    GIT_HASH:gitHash
  }
`;
const buildVariables = {
  GIT_HASH:res.GIT_HASH
};
export default buildVariables;