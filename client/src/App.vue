<template>
  <div id="app">
        <parent></parent>  <!-- common template -->
        <div class="container">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import parent from "./components/Parent";
export default {
  name: "app",
  components: {
    parent
  }
};
</script>

<style>

</style>
