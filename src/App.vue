<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('homePage')}}</router-link> |
      <router-link to="/about">{{ $t('aboutPage')}}</router-link>
    </div>
    <router-view/>

    <div class="lang">
      <select v-model="$i18n.locale" @change="changeLanguage">
        <option value="en">English</option>
        <option value="gr">Greek</option>
    </select>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    changeLanguage(obj) {
      localStorage.setItem('language', obj.target.value);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
