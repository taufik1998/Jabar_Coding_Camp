<template>
<v-container fluid>
  <v-slide-y-transition>
            <router-view></router-view>
          </v-slide-y-transition>
  <div class="about">
    <h1>This is a home page</h1>
  </div>
  <v-layout wrap>
    <blog-item-component
    v-for="blog in blogs"
    :key="`blog-` + blog.id"
    :blog="blog"
    ></blog-item-component>
  </v-layout>
  <button @click="increment(10)">Tambah</button>
  {{ count }}
  </v-container>

</template>

<script>
import BlogItemComponent from'.../components/BlogItemComponent.vue';
import {mapMutations, mapGetters } from 'vuex'
export default{

  data: () => ({
    apiDomain : 'http://demo-api-vue.sanbercloud.com',
    blogs:[]
  }),
  components : {
    'blog-item-component' : BlogItemComponent
  },
  computed : {
    ...mapGetters({
      'count' : 'counter/count'
    })
  },

  methods : {
    go(){
      const config = {
        methods : 'get',
        url : this.apiDomain + '/api/v2/blog/random/4'
    }

    this.axios(config)
      .then(response => {
        let { blogs } = response.data;
        this.blogs = blogs;
      })
    this.axios(config)
    .then(response => {
      let { blogs } = response.data;
      this.blogs = blogs;
    })
    .catch(error => {
      console.log(error);
    });
    },
    ...mapMutations({
      'increment' : 'counter/increment'
    })
  },
 
  created(){
   
    this.go()
  }
};
</script>

