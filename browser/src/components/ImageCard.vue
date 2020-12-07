<template>
  <div>
    <div class="border border-dark rounded">
      <img width="100px" height="100px" :src="image.images[0].link" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: ['image'],
};
</script>
