<template>
    <div v-if="post">
      <p v-html="post.description"></p>
      <div v-html="post.content" id="post"></div>
    </div>
    <div v-else-if="error">
      <p>Failed to load post: {{ error.message }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'nuxt/app';
  
  const route = useRoute();
  const postId = route.params.id;
  
  const { data: post, pending: isLoading, error } = await useFetch(`/api/posts/${postId}`, {
    headers: {
      fetchMode: 'headless',
    },
    server: true,
    watch: false,
  });

  </script>
  
  <style scoped>
  /* Add any specific styles for your post page */

  #post {
  color: ghostwhite;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

  </style>
  