<template>
  <div class="wrapper">
    <div class="formContainer">
      <h1 class="formTitle">{{title}}</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="formWrapper">
        <FormItem prop="email" class="email">
          <Input type="email" v-model="formInline.email" placeholder="Email">
          <Icon type="ios-mail" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" class="button" @click="handleSubmit('formInline')">Login</Button>
        </FormItem>
      </Form>
      <div>
        <router-link to="/register">
          <span>Create an account</span>
        </router-link>
        <i>|</i>
        <router-link to="/forgetPassword">
          <span>Forgot the password</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  data() {
    return {
      title: "Login",
      formInline: {
        email: "",
        password: ""
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "Please fill in the Email",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.wrapper {
  position: relative;
  min-height: 700px;
  background-color: #eaedf1;
  .formContainer{
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .formTitle{
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 30px;
    }
    .formWrapper{
      width: 30%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
