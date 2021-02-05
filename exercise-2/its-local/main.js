import { debug, getInput } from '@actions/core';

debug(`GitHub Event Name: ${process.env.GITHUB_EVENT_NAME}`);

//       message input here ${} ^
console.info(`╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ `, getInput('message'));
