<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <h1>Routing Example Header</h1>
      <ul>
        <li><router-link to="/view_one">Say hello View One</router-link></li>
        <li>
          <router-link to="/view_two/123">Say hello View Two</router-link>
        </li>
      </ul>
    </div>
    <div>
      <h4>Routing Example Router view</h4>
      <router-view></router-view>
    </div>
  <div>
      <h4>Routing Example Footer</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    msg: String,
  },
};
</script>

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
