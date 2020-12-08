<template>
  <div id="app" class="container">
    <h1 class="text-primary mt-3">{{ name }}</h1>
    <p>{{ description }}</p>

    <gallery :images="images"/>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'App',
  data() {
    return {
      name: 'Imgur Browser Application',
      description: 'Let\'s see what\'s hot lately!',
      images: [],
    };
  },
  methods: {
    loadData() {
      return fetch('https://api.imgur.com/3/gallery/search/viral/all/0?q=bikes', {
        mode: 'cors',
        headers: {
          Authorization: 'Client-ID f1851fad31caf33',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          this.images = data.data;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
  mounted() {
    this.loadData();
  },
  components: {
    Gallery,
  },
};

</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
