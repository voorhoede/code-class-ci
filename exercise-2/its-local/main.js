import { debug, getInput } from '@actions/core';

debug(`GitHub Event Name: ${process.env.GITHUB_EVENT_NAME}`);
const myInput = getInput('message', { required: true });
console.info(`╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ ${myInput}`);

