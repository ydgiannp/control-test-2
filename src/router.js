import Vue from 'vue'
import VueRouter from 'vue-router'

import CheckoutPage from './components/Checkout.vue'
import DashboardPage from './components/Dashboard.vue'
// import SignupPage from './components/Signup.vue'
import SigninPage from './components/Signin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: SigninPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage }
]

export default new VueRouter({mode: 'history', routes})