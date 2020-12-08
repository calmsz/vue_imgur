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
              class="col-sm m-2">
              <image-card :image='item' :isLazyLoad=true />
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
  methods: {
    lazyLoad() {
      // create config object: rootMargin and threshold
      // are two properties exposed by the interface
      const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0,
      };

      // register the config object with an instance
      // of intersectionObserver
      const observer = new IntersectionObserver((entries, self) => {
        // iterate over each entry
        entries.forEach((entry) => {
          // process just the images that are intersecting.
          // isIntersecting is a pr operty exposed by the interface
          if (entry.isIntersecting) {
            // custom function that copies the path to the img
            // from data-src to src
            this.preloadImage(entry.target);
            // the image is now in place, stop watching
            self.unobserve(entry.target);
          }
        });
      }, config);
      const imgs = document.querySelectorAll('[data-src]');
      imgs.forEach((img) => {
        observer.observe(img);
      });
    },
    preloadImage(target) {
      const image = document.querySelectorAll(`[data-src="${target.getAttribute('data-src')}"]`)[0];
      image.src = target.getAttribute('data-src');
    },
  },
  updated() {
    this.lazyLoad();
  },
};
</script>
