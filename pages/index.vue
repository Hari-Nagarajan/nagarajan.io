<template>
  <div id="content">
    <Intro/>
  </div>
</template>

<script>
  import Intro from '@/components/Intro'

  definePageMeta({
    components: {
      Intro
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

