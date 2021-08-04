<template>
  <div id="app">
    <router-view />
    <div class="Makeacall"  @click="callPhone"><a>联 系 周 师 傅</a></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    callPhone () {
      window.location.href = 'tel://18670213951'
    }

  }
}
</script>
<style lang="scss">
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.Makeacall{
  width: 100%;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  color: #fff;
  text-align: center;
  background: linear-gradient(to bottom, #b1fff2 5%, #cddae9 20%, #b0ffff);
  font-weight: bold;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
}

#app {
  height: 100%;
  overflow: hidden;
}
</style>
