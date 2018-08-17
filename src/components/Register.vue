<template>
  <div class="hello">
    <Card>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
       <FormItem prop="user">
           <Input type="text" v-model="formInline.user" placeholder="Username">
               <Icon type="ios-person-outline" slot="prepend"></Icon>
           </Input>
       </FormItem>
       <FormItem prop="password">
           <Input type="password" v-model="formInline.password" placeholder="Password">
               <Icon type="ios-locked-outline" slot="prepend"></Icon>
           </Input>
       </FormItem>
       <FormItem label="Inputxxxxxxxx">
           <Input v-model="formInline.user" placeholder="Enter something..."></Input>
       </FormItem>
       <FormItem>
           <Button type="primary" @click="handleSubmit('formInline')">Next Step</Button>
       </FormItem>
   </Form>
    </Card>
  <div>
    <router-link to="/"><span>Login</span></router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formInline: {
                    user: '',
                    password: ''
                },
      ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  margin-top: 16px;
}
.hello{
  min-height: 700px;
  background-color: #eaedf1;
  padding: 10px;
}
</style>
