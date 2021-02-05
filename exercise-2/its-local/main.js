import { debug, getInput } from '@actions/core';
const message = getInput('message');
debug(`GitHub Event Name: ${process.env.GITHUB_EVENT_NAME}`);

console.info(`╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ ${message}`);
//       message input here ${} ^
