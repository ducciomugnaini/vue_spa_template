<template lang="html">
  <div class="greeting">
    Hello from view two
  </div>
</template>

<script>
  //import axios from 'axios';

  export default {
    props: ['id'],

    metaInfo() {
      return {
        title: this.post && this.post.title,
      };
    },

    data() {
      return {
        post: null,
        endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },

    methods: {
      getPost(id) {
        /*axios(this.endpoint + id)
          .then(response => {
            this.post = response.data
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })*/
          console.log('ok from axios' + id);
      }
    },
    
    created() {

      // init
      this.getPost(this.id);

    },

    watch: {
      '$route'() {
        this.getPost(this.id);
      }
    }
  }
</script>


