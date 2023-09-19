
// export async function getadvice() {
//   const response = await fetch("https://api.adviceslip.com/advice");
//   const advicedata = await response.json();
//   return advicedata.slip;
// };

import { XMLParser } from 'fast-xml-parser';

const parseXml = (rawRssData) => {
  const parser = new XMLParser();
  return parser.parse(rawRssData);
};

export const load = async () => {
  const RSS_URL = `https://api.adviceslip.com/daily_adviceslip.rss`;
  const posts = await fetch(RSS_URL)
    const response = await posts.text();
    const rawXml = await parseXml(response).rss.channel.item;
    return rawXml;
};
// export async function getNewAdvice() {
//   const response = await fetch("https://api.adviceslip.com/advice");
//   const advicedata = await response.json();
//   return advicedata.slip;
// };
