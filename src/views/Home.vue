<template>
  <div class="home">
    <h1>{{ $t('hello')}}</h1>
    <h2>{{ $t('welcome', {name: 'World'})}}</h2>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
};
</script>
