<template>
    <div class="form">
        <div class="form-group">
            <label>First name</label>
            <input v-model="user.firstName" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Last name</label>
            <input v-model="user.lastName" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Username</label>
            <input v-model="user.username" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input v-model="user.password" type="password" class="form-control">
        </div>
        <div class="form-group">
            <label>Confirm Password</label>
            <input v-model="confirmPass" type="password" class="form-control">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input v-model="user.email" type="email" class="form-control">
        </div>
        <div>
            <button class="btn btn-primary" @click="userHandle">Create Account</button>
        </div>
        <div class="err" v-if="error">
            <p>Please try again</p>
            <p>{{errorMsg}}</p>
        </div>
    </div>
</template>

<script>
import {Global} from './../global.js';

export default {
    
    name:`Register`,
    data: function () {
            return {
                user: {
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    email: ""
                },
                confirmPass: "",
                error: false,
                errorMsg: {}
            };
        },
        methods:{
            userHandle:function(){
                   if (this.user.password !== this.confirmPass) {
                    this.errorMsg = "Password Not matched....."
                } else {
                    this.user.name = this.user.firstName + " " + this.user.lastName
                    this.user.confirmPassword = this.confirmPass
                    Global.register(this.user)
                        .then((data) => {
                            this.$router.push('/');
                        }, (err) => {
                            this.error= true;
                            this.errorMsg = err.body.message;
                        });
                }
            }
        }

}
</script>


<style scoped>
    .err {
        margin-top: 2em;
        background-color: rgba(255, 112, 79, 0.7);
    }
    .btn-primary {
        width: 100%;
        margin-bottom: 1em;
        background-color: #333333;

    }
    .form{
        padding: 1em;
    }
</style>