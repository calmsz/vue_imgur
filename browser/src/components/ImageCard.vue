<template>
  <div>
    <div>
      <img v-if="isLazyLoad" class="border border-dark rounded"
      :data-src="image.images[0].link.replace('.jpg', 't.jpg')"
      src="favicon.ico"/>
      <img v-if="!isLazyLoad" class="border border-dark rounded"
      :src="image.images[0].link.replace('.jpg', 't.jpg')"/>
    </div>
  </div>
</template>

<style scoped>
  img {
    min-height: 160px;
    min-width: 160px;
  }
</style>

<script>
export default {
  name: 'ImageCard',
  props: ['image', 'isLazyLoad'],
};
</script>
