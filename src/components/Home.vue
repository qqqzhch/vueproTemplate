<template>
  <div class="home">
    <my-card :title="title" :description="desc"></my-card>
    <Button type="primary" class="button" @click="toWhitelist()">Go Whitelist</Button>
  </div> 
</template>

<script>
import myCard from '@/components/common/MyCard.vue'
export default {
  methods: {
    toWhitelist() {
      this.$router.push({ path: "/whitelist" });
    }
  },
  data() {
    return {
      title: 'Congratulations!',
      desc:'You get 20 LAMB now!Please check on your account when the campaign ends'
    }
  },
  components:{
    myCard
  }
};
</script>

<style lang="less">
@import "../layouts/default/mixin/common.less";
.home {
  position: relative;
  min-height: 500px;
  background-color: #eaedf1;
  .button {
    .move(50%, 56%);
    transform: translateX(-50%);
    .media(320px, 767px, 96vw);
    .media(768px, 1025px, 40vw);
    .media(1026px, 1440px, 28vw);
  }
}
</style>
