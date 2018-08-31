import Vue from 'vue';
import jwt_decode from 'jwt-decode';

export const Global = new Vue({
    data: {
        token: "",
        userId: "",
        user: {},
        friendships: [],
        proxy:'http://localhost:9000/',
        isLogedIn:false
    },
    http: {
        root: '/data'
    },
    methods: {
        setPassword(token){
            localStorage.setItem('jwtToken',token)
             this.user = jwt_decode(token)
             this.userId = this.user._id;
            //  cb(this.user)
        },
        login(user){
            return this.$http.post(`${this.proxy}api/auth/login`, user);
        },
        register(user){
            return this.$http.post(`${this.proxy}api/auth/register`, user);
        },
        updateUser(user){
            return this.$http.put(`user/${this.userId}`, user, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        getUser(userId, includePosts){
            if (includePosts) {
                return this.$http.get(`user/${userId}?includePosts=true`, {headers: {'Authorization': `Bearer ${this.token}`}});
            }
            return this.$http.get(`user/${userId}`, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        findUsers(query){
            return this.$http.get(`user${query}`, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        sendPost(formData){
            return this.$http.post(`post`, formData, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        getPosts(userId){
            return this.$http.get(`user/${userId}/posts`, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        postLike(postId){
            return this.$http.put(`post/${postId}/like`, null, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        sendComment(postId, text){
            const toSend = {
                content: text
            };
            return this.$http.post(`comment/${postId}`, toSend, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        postCommentLike(commentId){
            return this.$http.put(`comment/${commentId}/like`, null, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        sendUserAvatar(formData){
            return this.$http.put(`user/img/${this.userId}`, formData, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        getFriends(){
            return this.$http.get(`user/${this.userId}/friends`, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        sendFriendrequest(userId){
            return this.$http.post(`friendship/`, {id: userId}, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        updateFriendship(userId, accept){
            let id;
            this.friendships.some((friendship) => {
                if (friendship.userOne === userId || friendship.userTwo === userId) {
                    id = friendship._id;
                }
            });
            return this.$http.put(`friendship/${id}`, {approved: accept}, {headers: {'Authorization': `Bearer ${this.token}`}});

        },
        performSearch(string){
            return this.$http.get(`search/?string=${string}`, {headers: {'Authorization': `Bearer ${this.token}`}});
        },
        logout(){
            this.token = "";
            this.userId = "";
            this.user = {};
        }
    },

    computed: {
        logedIn: function () {
            return this.userId !== "";
        }
    }
});
