<template>
    
    <div class="form">
        <div class="form-group">
            <label>Email</label>
            <input v-model="user.email" type="text" class="form-control" placeholder="Bruce@gmail.com"
            >
        </div>

        <div class="form-group">
            <label>Password</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Password"
            >
        </div>

        <div>
            <button class="btn btn-primary" @click="login">Log in</button>
        </div>
        <div class="err" v-if="error">
           <p>Password or email are not matching the database</p>
            <p>Please try again</p>
        </div>
    </div>
</template>

<script>
import { Global } from "./../global.js";
import jwt_decode from 'jwt-decode';

export default {
  name: `Login`,
  data: function() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: false
    };
  },
  methods: {
    login: async function() {
      Global.login(this.user).then(
        data => {
          Global.token = data.body.token;
          if(data.body.token) Global.isLogedIn = true
          Global.setPassword(data.body.token)
          let user = jwt_decode(data.body.token)
          Global.userId = user._id
          this.$router.push("/home/");
          
        
        //   Global.getUser(Global.userId).then(
        //     data => {
        //       Global.user = data.body;
        //       this.$router.push("/home/");
        //     },
        //     err => {
        //       console.log(err);
        //     }
        //   );
        },
        err => {
          this.error = true;
        }
      );
    }
  },
  userHandle: function() {
    if (this.user.password !== this.confirmPass) {
      this.errorMsg = "Password Not matched.....";
    } else {
      this.user.name = this.firstName + " " + this.lastName;
      this.user.confirmPassword = this.confirmPass;
      Global.register(this.user).then(
        data => {
          this.$router.push("/");
        },
        err => {
          this.error = true;
          this.errorMsg = err.body.message;
        }
      );
    }
  }
};
</script>


<style scoped>
input.form-control {
  margin-bottom: 0.5em;
}
.btn-primary {
  width: 100%;
  margin-bottom: 1em;
  background-color: #333333;
}
.form {
  padding: 1em;
}

.err {
  margin-top: 2em;
  background-color: rgba(255, 112, 79, 0.7);
}
</style>

