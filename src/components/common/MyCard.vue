<template>
  <div class="card">
        <Card class="content">
            <p slot="title">{{title}}</p>
            <p>{{description}}</p>
            <slot/>
        </Card>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    },
    description:{
      type:String
    }
}
};
</script>

<style lang="less">
@import "../../layouts/default/mixin/common.less";
.card {
  background-color: #eaedf1;
  .content {
    .media(320px, 767px, 96vw);
    .media(768px, 1025px, 40vw);
    .media(1026px, 1440px, 28vw);
    .move(50%, 20%);
    .fsc(13px, #333);
    transform: translateX(-50%);
    .ivu-card-head {
      padding:0 0 0 16px;
      background-color: #dcdee3;
    }
  }
}
</style>
