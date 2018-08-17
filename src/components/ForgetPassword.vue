<template>
  <div>
    <Card>
      <h1>{{title}}</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="email">
          <Input type="email" v-model="formInline.email" placeholder="Email">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Retrieve the password</Button>
        </FormItem>
      </Form>
    </Card>
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
        ]
      }
    };
  }
};
</script>
</script>

<style>
</style>
