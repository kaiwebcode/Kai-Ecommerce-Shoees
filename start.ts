// start.ts
const { execSync } = require('child_process');

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined
execSync(`next start -p ${port} -H 0.0.0.0`, { stdio: 'inherit' });
