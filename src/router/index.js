import Vue from 'vue'
import Router from 'vue-router'


import headfoot from '@/layouts/default/headfoot.vue'
import dashboard from '@/layouts/default/dashboard.vue'


const Login = (resolve) => {
  import('@/components/Login').then((module) => {
    resolve(module)
  })
}

const Register = resolve => {
  import("@/components/Register").then(module => {
    resolve(module);
  });
};

const ForgetPassword = resolve => {
  import("@/components/ForgetPassword").then(module => {
    resolve(module);
  });
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      // name: "login",
      component: headfoot,
      children: [
        {
          path: "",
          component: Login
        }
      ]
    },
    {
      path: "/register",
      // name: "register",
      component: dashboard,
      children: [
        {
          path: "",
          component: Register
        }
      ]
    },
    {
      path: "/forgetPassword",
      component: headfoot,
      children: [
        {
          path: "",
          component: ForgetPassword
        }
      ]
    }
  ]
});
