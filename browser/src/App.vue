<template>
  <div id="app" class="container">
    <h1 class="text-primary mt-3">{{ name }}</h1>
    <p>{{ description }}</p>
    <h4>
      <font-awesome-icon icon="images"></font-awesome-icon>
      Gallery
    </h4>
    <div class="row">
      <div class="col-sm">
        <label for="section">Section</label>
        <select class="custom-select" name="section" id="section"
        v-model="section" v-on:change="loadData">
          <option value="hot">hot</option>
          <option value="top">top</option>
          <option value="user">user</option>
        </select>
      </div>
      <div class="col-sm" v-if="section === 'top'">
        <label for="window">Window</label>
        <select class="custom-select" name="window" id="window"
        v-model="window" v-on:change="loadData">
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="year">year</option>
          <option value="all">all</option>
        </select>
      </div>
      <div class="col-sm" v-if="section === 'user'">
        <label for="sort">Sort</label>
        <select class="custom-select" name="sort" id="sort"
        v-model="sort" v-on:change="loadData">
          <option value="viral">viral</option>
          <option value="top">top</option>
          <option value="time">time</option>
          <option value="rising">rising</option>
        </select>
      </div>
      <div class="col-sm">
        <label for="showViral">Show Viral</label>
        <select class="custom-select" name="showViral" id="showViral"
        v-model="showViral" v-on:change="loadData">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
    <br>
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
      searchWord: 'bikes',
      section: 'hot',
      showViral: true,
      window: 'all',
      sort: 'viral',
    };
  },
  methods: {
    loadData() {
      return fetch(`https://api.imgur.com/3/gallery/${this.section}/${this.sort}/${this.window}/0?showViral=${this.showViral}&q=${this.searchWord}`, {
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
