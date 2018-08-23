<template>
  <div class="notfound">
    <img src="https://token.lambda.im/assets/8c382430f673ad2237bbf19e5c8a4b00.png" alt="">
    <div class="prompt">
      <h3>Sorry, the page you visited does not exist</h3>
      <p>The page you are looking for has not been found. Please return <router-link to="/">home page</router-link> Continue to browse</p> 
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less">
@media screen and (min-width: 310px) and (max-width: 720px){
  .notfound{
  min-height: 200px;
  position: relative;
  img{
    width: 100px;
    height: 100px;
    position: absolute;
    margin-left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .prompt{
    position: absolute;
    left: 32%;
    top: 30%;
    margin-left: 15px;
    color: rgb(102, 102, 102);
    h3{
      font-size: 14px;
    }
    p{
      font-size: 12px;
    }
  }
}
}
@media screen and (max-width: 1199px) and (min-width: 721px){
  .notfound{
  min-height: 300px;
  padding: 5%;
  position: relative;
  img{
    width: 180px;
    height: 180px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .prompt{
    position: absolute;
    left: 31%;
    top: 39%;
    color: rgb(102, 102, 102);
    h3{
      font-size: 20px;
    }
    p{
      font-size: 14px;
    }
  }
}
}
@media screen and (min-width: 1200px){
  .notfound{
  min-height: 350px;
  padding: 5%;
  position: relative;
  img{
    width: 260px;
    height: 260px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .prompt{
    position: absolute;
    left: 31%;
    top: 39%;
    color: rgb(102, 102, 102);
    h3{
      font-size: 24px;
    }
    p{
      font-size: 16px;
    }
  }
}
}
</style>