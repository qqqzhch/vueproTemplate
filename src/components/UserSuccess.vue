<template>
  <div class="success">
    <my-card :title="title" :description="desc">
      <p>{{count}} seconds automatically jump to login page</p>
    </my-card>
    <Button type="primary" class="button" @click="toLogin()">Login</Button>
  </div>
</template>

<script>
import myCard from '@/components/common/MyCard.vue'
export default {
  data() {
    return {
      title: 'Require Verification!',
      desc: 'Within 24 hours of registration,you\'ll receive an email from us .Click the emailverification to verify your email',
      count: '',
      timer: null
    }
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
  methods: {
    toLogin() {
      this.$router.push({ path: "/" });
    }
  },
  components: {
    myCard
  }
}
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";
.success {
  position: relative;
  min-height: 500px;
  background-color: #eaedf1;
  .button {
    .move(50%, 62%);
    transform: translateX(-50%);
    .media(320px, 767px, 96vw);
    .media(768px, 1025px, 40vw);
    .media(1026px, 1440px, 28vw);
  }
}
</style>
