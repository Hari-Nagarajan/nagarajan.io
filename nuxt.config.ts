import { defineNuxtConfig } from 'nuxt/config'
import axios from 'axios';
import { parseStringPromise } from 'xml2js';


const getPostRoutes = async () => {
    const routes = [];
    console.log('Starting to fetch RSS feed...');
    const response = await axios.get('https://rss.beehiiv.com/feeds/JvEXu3aJbh.xml');
    console.log('Fetched RSS feed successfully:', response.data);
    const result = await parseStringPromise(response.data);
    console.log('Fetched RSS feed successfully:', response.data);
    const items = result.rss.channel[0].item;
    items.forEach(item => {
      console.log('Processing item:', item);
      let guid = item.guid[0]._.replace("https://blog.nagarajan.io/p/", "")
      routes.push(`/posts/${guid}`);
    });

    console.log('Generated routes:', routes);
    return routes;
};

export default defineNuxtConfig({
  modules: [
    '@nuxt/image'
  ],
  image: {
    inject: true,
    format: ['webp']
  },

  nitro: {
    preset: 'node-server', // Change to 'node-server' or appropriate preset
  },

  vite: {
    assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg']
  },

  app: {
    head: {
      title: 'Hari\'s Website',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'user-scalable=yes, width=device-width, initial-scale=1, maximum-scale=5' },
        { hid: 'description', name: 'description', content: 'Hari\'s Personal Website!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // fetch the routes from our function above
      const slugs = await getPostRoutes();
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
})
