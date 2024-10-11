const { execSync } = require('child_process');

const commitMsg = execSync('git log -1 --pretty=%B').toString().trim();

const scopeMatch = commitMsg.match(/\(([^)]+)\)/);

const scope = scopeMatch ? scopeMatch[1] : 'global';

console.log(scope);
