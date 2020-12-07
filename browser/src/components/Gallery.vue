<template>
  <div>
    <h4>
      <font-awesome-icon icon="images"></font-awesome-icon>
      Gallery
    </h4>
    <div class="container">
      <div class="row">
        <div v-for="item in images" :key="item.id">
            <div v-if="!!item.images && item.images[0].type === 'image/jpeg'"
              class="col-sm m-3">
              <image-card :image='item' />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ImageCard from '@/components/ImageCard.vue';

export default {
  name: 'Gallery',
  props: ['images'],
  components: {
    FontAwesomeIcon,
    ImageCard,
  },
};
</script>
