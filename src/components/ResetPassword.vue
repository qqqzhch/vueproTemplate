<template>
  <div class="registerWrapper">
    <div class="formContainer">
      <div class="formHeader">
        <h1 class="title">{{title}}</h1>
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="resetPassword">
        
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
        <FormItem>
          <Button type="primary" class="button" @click="handleSubmit('formInline')">Reset the password</Button>
        </FormItem>

        <div class="formBottom">
          Set new password
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
    },
    validatePass(rule, value, callback){
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formInline.confirmPassword !== "") {
          this.$refs.formInline.validateField("confirmPassword");
        }
        callback();
      }
    },
    validateConfirmPass(rule, value, callback){
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formInline.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    }
  },
  data() {
    return {
      title: "Reset the password",
      formInline: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      ruleInline:
      {
        email: [
          {
            required: true,
            message: "Please fill in the Email",
            trigger: "blur"
          },
          {
            type: "string",
            max: 40,
            message: "The email length cannot be more than 40 bits",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter the correct email"
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
            max: 16,
            message: "length cannot be less than 6 bits or more than 16 bits",
            trigger: "blur"
          },
          {
            validator: this.validatePass,
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            validator: this.validateConfirmPass,
            trigger: "blur"
          }
        ],
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
    top: 20%;
    .wh(100%, 50%);
    .formHeader {
      font-weight: 700;
      .fsc(13px, #666666);
      .title {
        .fsc(20px, #242425);
        margin-bottom: 10px;
      }
      margin-bottom: 30px;
    }
    .resetPassword {
      .media(320px, 767px, 96vw);
      .media(768px, 1025px, 40vw);
      .media(1026px, 1440px, 28vw);
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
      .formBottom {
        font-size: 14px;
      }
    }
  }
}
</style>
