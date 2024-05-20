<template>
  <div id="content">
    <Intro/>
    <Projects/>
  </div>
</template>

<script>
  import Intro from '@/components/Intro'
  import Projects from '@/components/Projects/Projects'

  definePageMeta({
    components: {
      Intro,
      Projects
    },
    data() {
      return {};
    }
  });
</script>

<style scoped>

  #content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }

</style>

