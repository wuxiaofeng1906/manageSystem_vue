import VueRouter from 'vue-router';
import Login from "../pages/login"

const routes = [
    {
        path: '/',
        component: Login
    }
];


export default new VueRouter({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
