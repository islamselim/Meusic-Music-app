<template>
  <div id="app">
     <router-link to="/">Home</router-link>
     <router-link to="/users">Users</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
