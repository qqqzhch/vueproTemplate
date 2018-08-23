import Vue from 'vue'
import Router from 'vue-router'
import headfoot from '@/layouts/default/headfoot.vue'
import dashboard from '@/layouts/default/dashboard.vue'

import NotFound from '@/components/common/NotFound.vue'

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

const Home = resolve => {
  import("@/components/Home").then(module => {
    resolve(module);
  });
};

const WhiteList = resolve => {
  import("@/components/WhiteList").then(module => {
    resolve(module);
  });
};

const ResetPassword = resolve => {
  import("@/components/ResetPassword").then(module => {
    resolve(module);
  });
};

const UserSuccess = resolve => {
  import("@/components/UserSuccess").then(module => {
    resolve(module);
  });
};

const Verification = resolve => {
  import("@/components/Verification").then(module => {
    resolve(module);
  });
};


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      // name: "login",
      component: headfoot,
      children: [
        {
          path: "",
          component: Home
        }
      ]
    },
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
    },
    {
      path: "/whitelist",
      component: headfoot,
      children: [
        {
          path: "",
          component: WhiteList
        }
      ]
    },
    {
      path: "/resetpassword",
      component: headfoot,
      children: [
        {
          path: "",
          component: ResetPassword
        }
      ]
    },
    {
      path: "/usersuccess",
      component: headfoot,
      children: [
        {
          path: "",
          component: UserSuccess
        }
      ]
    },
    {
      path: "/verification/:type",
      component: headfoot,
      children: [
        {
          path: "",
          name:"verification",
          component: Verification
        }
      ]
    },
    {
      path:"*",
      component:NotFound
    }
  ]
});
