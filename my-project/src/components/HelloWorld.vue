<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h1>Routing Example</h1>
      <p>
        <router-link to="/hello">to home</router-link>
        <router-link to="/post/123">to post</router-link>
        <router-view></router-view>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
