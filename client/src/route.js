import Start from './components/start.vue'
import Login from './components/login.vue'
import Signup from './components/register.vue'
import Home from './components/home.vue'
import {Global} from './global.js';
import Info from './components/info.vue'
import User from './components/user.vue'
import Friends from './components/friend.vue'

export const routes = [{
        path: '',
        component: Start,
        children: [{
                path: '',
                component: Login,
                name: 'login'
            },
            {
                path: '/signup',
                component: Signup,
                name: 'signup'
            }
        ]
    }, {
        path: '/home',
        beforeEnter: (to, from, next) => {
            if (!Global.isLogedIn) {
                next({
                    name: 'login'
                });
            }
            next();
        },
        component: Home,
        children: [{
                path: 'edit',
                name: 'edit'
            },
            {
                path: 'friends',
                name: 'friends',
                component: Friends
            },
            // {
            //     path: 'history',
            //     name: 'history',
            //     component: UserView
            // }, 
            {
                path: '',
                component: User,
                name: 'home'
            },
            // {
            //     path: '/home/user/:id',
            //     name: 'userView',
            //     component: UserView,
            //     canReuse: false
            // }
        ]
    }, {
        path: '/info',
        component: Info
    },
    {
        path: '/*',
        component: Error,
    }
]