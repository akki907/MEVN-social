<template>
    <div >
        <!-- <div class="card">
            <img v-bind:src="user.avatar" style="width:100px; text-align:center;" />
            <p>{{user.name}}</p>
        </div> -->
        
        <div class="main">
        <div class=" control">
            <div class=" nav">
                <ul class=" nav nav-pills">
                    <router-link :to="{name: 'home'}" exact tag="li" active-class="active"><a>Home</a></router-link>
                    <!-- <router-link :to="{name: 'history'}" tag="li" active-class="active"><a id="historyRoute">History</a>
                    </router-link> -->
                    <router-link :to="{name:'friends'}" tag="li" active-class="active"><a>Friends</a></router-link>
                </ul>
            </div>
            <button class="btn" @click="logout">Logout</button>
        </div>
        
        <router-view :user="user"></router-view>

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
  },
  methods:{
      logout:function(){
        //   Global.logout()
        localStorage.removeItem('jwtToken');
          Global.user = {};
          Global.userId = "";
          Global.isLogedIn = false
          this.$router.push("/");
      }
  }
};
</script>

<style scoped>
    .main {
        margin-top: -65px;
        max-width: 1000px;
    }

    .nav {
        margin-right: auto;

    }

    .search {
        width: 30vw;
        margin-right: 4%;
    }

    .control {
        display: inline-flex;
        flex-direction: row;
        width: 100%;

    }

    .nav-pills > li.active > a, .nav-pills > li.active > a:focus, .nav-pills > li.active > a:hover {
        color: #fff;
        background-color: #333333;
        border: 0;
    }

    .nav-pills > li > a:hover {
        background-color: rgba(219, 215, 19, 0);;
        transform: scale(1.1);
    }

    .nav-pills > li > a {
        color: #333333;
    }

    .btn-secondary {
        background-color: #333;
        color: white;
    }

    .btn {
        max-width: 80px;
        max-height: 35px;
        color: white;
        background-color: #333;
        outline: none;
    }

    .closeSearch {
        margin-top: 30px;
        max-width: 100px;
        max-height: 55px;
    }

    .btn:active {
        outline: none;
    }

</style>
