<template>
    <div class="col">
        <div class="card">
            <img v-bind:src="user.avatar" style="width:100px; text-align:center;" />
            <p>{{user.name}}</p>
        </div>
    </div>
</template>

<script>
import { Global } from "../global.js";

export default {
  name: "Home",
  data: function() {
    return {
      user: Global.user,
      error: false
    };
  }
};
</script>

<style>
</style>
