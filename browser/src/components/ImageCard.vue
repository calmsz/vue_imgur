<template>
  <div>
    <div class="card border border-dark rounded"
      role="button" style="width: 162px;"
      data-toggle="modal"
      :data-target='`#exampleModalCenter${image.id}`'
      v-on:click="loadBigImage">
      <img v-if="isLazyLoad" class="card-img-top imgThumb"
      :data-src="image.images[0].link.replace('.jpg', 't.jpg')"
      src="favicon.ico"/>
      <img v-if="!isLazyLoad" class="card-img-top"
      :src="image.images[0].link.replace('.jpg', 't.jpg')"/>
      <div class="card-body">
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>

<!-- Modal -->
<div class="modal fade" :id='`exampleModalCenter${image.id}`'
tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <img width="100%" :id="image.id" alt="" loading="lazy">
      </div>
      <div class="modal-body">
        <ul>
          <li>Title: {{ image.title }}</li>
          <li>Description: {{ description }}</li>
          <li>Upvotes: {{ image.ups }}</li>
          <li>Downvotes: {{ image.downs }}</li>
          <li>Score: {{ image.score }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>
  img {
    min-width: 160px;
  }
  .imgThumb {
    max-height: 160px;
  }
</style>

<script>
export default {
  name: 'ImageCard',
  props: ['image', 'isLazyLoad'],
  data() {
    return {
      description: this.getDescription(),
    };
  },
  methods: {
    getDescription() {
      const text = this.image.images[0].description
      || this.image.description
      || 'No description';
      const textEnd = (text.length > 50) ? '...' : '';
      return `${text.substring(0, 50)}${textEnd}`;
    },
    loadBigImage() {
      document.getElementById(this.image.id).src = this.image.images[0].link;
    },
  },
};
</script>
