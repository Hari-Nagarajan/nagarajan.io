<template>
  <div id="projects">
    <Project v-for="project in projects"
             :key="project.id"
             :projectName="project.projectName"
             :repoURL="project.repoURL"
             :projectDescription="project.projectDescription"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from '@/components/Projects/Project.vue'

const projects = ref([
  {
    id: 1,
    projectName: "Twitter AI",
    repoURL: "https://github.com/Hari-Nagarajan/gpt2-twitter",
    projectDescription: "I like Twitter, but I never actually tweet anything, so I figured why not use Machine Learning to tweet for me." +
      "I used the GPT-2 Model from OpenAI as a base and then tuned it with content from some of the users I follow. Now I have a bot periodically " +
      "generating content to post and I am now active on Twitter. Follow me for occasionally high quality content."
  }
])
</script>

<style scoped>
#projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

@media (max-width: 440px) {
  #projects {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}
</style>
