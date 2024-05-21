<template>
  <div class="intro">
    <div class="introRow">
      <div class="introCol">
        <h1 class="name">
          Hi, I'm <span class="highlight">Hari</span>
        </h1>
        <p>
          I'm a Software Engineer from Richmond, VA that likes to build things.
        </p>
      </div>
      <Hero />
    </div>
    <div>
      <h1>Latest Posts</h1>
      <ul>
        <li v-for="post in result" :key="post.guid">
          <router-link :to="`/posts/${post.guid}`">{{ post.title }} - {{ new Date(post.pubDate).toLocaleDateString() }}</router-link>
        </li>
      </ul>    
    </div>

  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'

// let result = useState('result');
const { data: result, pending: isLoading, error } = await useFetch('/api/posts', {
    headers: {
      fetchMode: 'headless',
    },
    server: true,
    watch: false,
  });

</script>

<style scoped>
.intro {
  display: block;
  align-content: center;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10vh;
}

.introRow {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0;
  flex-wrap: wrap;
}

.introCol {
  max-width: 50%;
  flex-basis: 50%;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.introCol h1 {
  font-size: 48px;
  font-weight: 600;
  color: ghostwhite;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  margin: 0;
}

.introCol h2 {
  margin: 0;
  color: wheat;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  font-weight: 300;
  text-transform: uppercase;
  font-size: 16px;
}

.introCol p {
  color: whitesmoke;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  font-weight: 400;
}

.highlight {
  color: red;
}

@media (max-width: 440px) {
  .titles {
    font-size: 24px;
    line-height: 1.0em;
    font-weight: 600;
    color: white;
    letter-spacing: 1px;
    -webkit-text-stroke: 1px black;
  }

  .intro {
    padding-top: 5vh !important;
    margin-top: 0vh;
    width: 100%;
  }

  .introCol {
    max-width: 90%;
  }

  .introRow {
    padding: 0em 0em 0em 0em;
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100%;
  }

  .photoCol {
    max-width: 50%;
    margin-left: 1em;
    margin-right: 1em;
  }

}
</style>
