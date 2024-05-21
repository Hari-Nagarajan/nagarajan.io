import { defineEventHandler, useQuery } from 'h3'
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

console.log("API Route /api/posts is now being accessed");

export default defineEventHandler(async (event) => {
  console.log("Handling request to /api/posts");
  try {
    const response = await axios.get('https://rss.beehiiv.com/feeds/JvEXu3aJbh.xml');
    const result = await parseStringPromise(response.data);
    const items = result.rss.channel[0].item;

    const posts = items.map(item => ({
      title: item.title[0],
      description: item.description[0],
      pubDate: item.pubDate[0],
      guid: item.guid[0]._.replace("https://blog.nagarajan.io/p/", ""),
    }));

    return posts;
} catch (error) {
    return { error: 'Failed to fetch RSS feed' };
  }
});