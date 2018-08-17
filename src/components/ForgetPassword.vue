<template>
  <div class="forgetWrapper">
    <div class="formContainer">
      <h1 class="title">{{title}}</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="forget">
        <FormItem prop="email" class="email">
          <Input type="email" v-model="formInline.email" placeholder="Email">
          <Icon size="20" type="ios-email" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button class="button" type="primary" @click="handleSubmit('formInline')">Retrieve the password</Button>
        </FormItem>
        <div class="bottom">
          <span>Emails reset the password</span>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import rules from "@/config/rules.js"
export default {
  name: "forgetpassword",
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
      title: "Forgot the password",
      formInline: {
        email: ""
      },
      ruleInline: rules
    };
  }
};
</script>
<style lang="less">
@import "../layouts/default/mixin/common.less";
.forgetWrapper {
  position: relative;
  min-height: 440px;
  background-color: #eaedf1;
  .formContainer {
    position: absolute;
    top: 25%;
    .wh(100%, 50%);
    .title {
      font-weight: 700;
      .fsc(20px, #242425);
      margin-bottom: 30px;
    }
    .forget {
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
      .button {
        font-size: 15px;
      }
      .email {
        margin-bottom: 30px;
      }
    }
    .bottom {
      .fsc(14px, #999999);
    }
  }
}
</style>
