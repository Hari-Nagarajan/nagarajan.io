<template>
  <div class="project">
    <div class="title">
      <a :href="repoURL">
        <picture>
          <source :srcset="githubIconPng" type="image/png" />
          <img :src="githubIconPng" alt="photo of Hari" />
        </picture>
      </a>
      <h3>{{ projectName }}</h3>
    </div>
    <p>{{ projectDescription }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import githubIconPng from '~/assets/icons/github.png'

const props = defineProps({
  projectName: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  },
  repoURL: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: false
  }
})
</script>

<style scoped>
.project {
  max-width: 300px;
  box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.2);
  background-color: rgba(218, 85, 38, .2);
  margin: 1em;
  padding: 1em;
  color: ghostwhite;
}

.title {
  display: flex;
  flex-direction: row;
}

h3 {
  margin-left: 1em;
}

a img {
  height: 50px;
}

/* On mouse-over, add a deeper shadow */
.project:hover {
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 440px) {
  .project {
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0.5em;
  }
}
</style>
