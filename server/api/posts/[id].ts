import { defineEventHandler, useQuery } from 'h3'
import axios from 'axios'
import { parseStringPromise } from 'xml2js';
import { JSDOM } from 'jsdom';

console.log("API Route /api/posts[id] is now being accessed");


export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    console.log(`Handling request to /api/posts/${id}`);
  
    try {
      const { data } = await axios.get('https://rss.beehiiv.com/feeds/JvEXu3aJbh.xml');
      const parsedData = await parseStringPromise(data);
      
      const items = parsedData.rss.channel[0].item;
      const item = items.find(i => i.guid[0]._ === `https://blog.nagarajan.io/p/${id}`);
  
      if (!item) {
        return { error: 'Post not found' };
      }

          // Remove the "Powered by beehiiv" div from the description
    const dom = new JSDOM(item['content:encoded'][0]);
    const document = dom.window.document;
    const beehiivFooter = document.querySelector('.beehiiv__footer');
    if (beehiivFooter) {
      beehiivFooter.remove();
    }
    let content = document.body.innerHTML;

  
      const post = {
        title: item.title[0],
        link: `https://nagarajan.io/posts/${id}`,
        description: item.description[0],
        pubDate: item.pubDate[0],
        guid: id,
        content: content
    }
  
      return post;
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      return { error: 'Failed to fetch post' };
    }
  });