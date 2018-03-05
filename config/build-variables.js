import preval from 'preval.macro';

const res = preval`
  const {execSync} = require('child_process')
  const gitHash = execSync("git rev-parse --short HEAD",{encoding:"UTF-8"});
  module.exports = {
    gitHash:gitHash,
    channel: process.env.MOBILECENTER_BRANCH || process.env.NODE_ENV || 'development'
  }
`;
const buildVariables = {
  gitHash:res.gitHash,
  channel: res.channel

};
export default buildVariables;