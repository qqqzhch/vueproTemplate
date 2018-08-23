<template>
  <div class="verification">
    <my-card :title="types[this.$route.params.type].title" :description="types[this.$route.params.type].desc">
      <p>{{count}} seconds automatically jump to the login page</p>
    </my-card>
    <Button type="primary" class="button" @click="toLogin()">Login</Button>
  </div>
</template>

<script>
import myCard from "@/components/common/MyCard.vue";
export default {
  methods: {
    toLogin() {
      this.$router.push({ path: "/" });
    }
  },
  data() {
    return {
      count: '',
      timer: null,
      types:[
        {
          title:"Mailbox verification failed",
          desc:"after login  you can  verification"
        },
        {
          title:"Verification Confirmed",
          desc:"You have already verified by email, please login to fill out the form"
        }
      ]
    };
  },
  mounted() {
    const TIME_COUNT = 30;
    if (!this.timer) {
      this.count = TIME_COUNT;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          this.$router.push({ path: "/" });
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000)
    }
  },
  components: {
    myCard
  }
};
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";
.verification {
  position: relative;
  min-height: 500px;
  background-color: #eaedf1;
  .button {
    .move(50%, 56%);
    margin-top:20px;
    transform: translateX(-50%);
    .media(320px, 767px, 96vw);
    .media(768px, 1025px, 40vw);
    .media(1026px, 1440px, 28vw);
  }
}
</style>
