<template>
  <div class="registerWrapper">
    <div class="formContainer">
      <div class="formHeader">
        <h1 class="title">{{title}}</h1>
        All users can receive 20 LAMB reward! The <br> campaign will end 5th September.
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="register">
        <FormItem prop="email" class="email">
          <Input type="email" v-model="formInline.email" placeholder="Email">
          <Icon size="20" type="ios-email" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="password">
          <Input type="password" v-model="formInline.password" placeholder="At least 6 bit passwords">
          <Icon size="20" type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="confirmPassword" class="confirmPassword">
          <Input type="password" v-model="formInline.confirmPassword" placeholder="Confirm the password">
          <Icon size="20" type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="verification" class="verification">
          <Input type="text" v-model="formInline.verification" placeholder="Please enter the verification code below">
          <Icon size="16" type="" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" class="button" @click="handleSubmit('formInline')">Next Step</Button>
        </FormItem>
        <div class="validate">
          <img src="data:image/jpeg;base64,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" alt="">
          <div class="refresh">
            <Icon size="20" type="refresh"></Icon>
            refresh
          </div>
        </div>
        <div class="formBottom">
          <router-link to="/">
            <span>Login</span>
          </router-link>
          <span>|</span>
          <router-link to="/forgetPassword">
            <span>Forgot the password</span>
          </router-link>
        </div>
      </Form>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formInline.confirmPassword !== "") {
          // 对第二个密码框单独验证
          this.$refs.formInline.validateField("confirmPassword");
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formInline.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      title: "Register",
      formInline: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "Please fill in the Email",
            trigger: "blur"
          },
          {
            type: "string",
            pattern:/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
            message: "Please enter the correct email",
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
          },
          { validator: validatePass, trigger: "blur" }
        ],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
        verification: [
          {
            required: true,
            message: "Please fill in the verification.",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";
.registerWrapper {
  position: relative;
  min-height: 650px;
  background-color: #eaedf1;
  .formContainer {
    position: absolute;
    top: 9%;
    .wh(100%,50%);
    .formHeader {
      font-weight: 700;
      .fsc(13px,#666666);
      .title {
        .fsc(20px,#242425);
        margin-bottom: 10px;
      }
      margin-bottom: 30px;
    }
    .register {
      .media(320px,767px,96vw);
      .media(768px,1025px,40vw);
      .media(1026px,1440px,28vw);
      .hc();
      input {
        height: 40px;
        border-style: solid;
        border-width: 1px 1px 1px 0px;
        font-size: 14px;
        // outline: none;
      }
      .ivu-input-group-prepend {
        background-color: #fff;
      }
      .email {
        margin-bottom: 30px;
      }
      .password {
        margin-bottom: 30px;
      }
      .button {
        height: 34px;
        font-size: 16px;
      }
      .validate {
        padding-bottom: 50px;
        .wh(100%,20%);
        position: relative;
        img {
          .move();
          .wh(100px,30px);
        }
        .refresh {
          .wh(100px,30px);
          .move(35%);
          background-color: #fff;
          border:1px solid #dcdee3;
          border-radius: 50px;
          line-height: 30px;
          .fsc(14px,#333333);
        }
      }
      .formBottom {
        font-size: 14px;
      }
    }
  }
}
</style>
