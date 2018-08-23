<template>
  <div>
    <div class="bg"></div>
    <header>
      <div :class="showNav">
        <div class="container">
          <div class="logo">
            <a href="/index.html">
              <img src="./logowhite.svg" alt="">
            </a>
          </div>
          <div class="navbar nav-right">
            <div class="nav-item mao">
              <a href="javascript:;">
                <icon name="user"></icon> User Name
              </a>
            </div>

            <div class="nav-item" style="float:right">

            </div>
          </div>
          <div class="navbar-toggle-btn">
            <icon name="user" class="navbar-toggle-user"></icon>
          </div>

          <div class="mobile-navbar">
            <div class="nav-item active" id="products" style="border-top: 1px solid rgba(255,255,255,.2)">
              <ul>
                <li class="mao">
                  <a href="javascript:;">APPLICATION SCENARIOS</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">WORKING PRINCIPLE</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">ECOSYSTEM</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">ROADMAP</a>
                </li>
                <li class="mao">
                  <a href="https://token.lambda.im/#/register">REGISTER/SIGN UP</a>
                </li>
              </ul>
            </div>

            <div class="nav-item" id="language">
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
    <footer>
      <div class="container">
        <div class="contents">
          <div class="logo">
            <img src="./logowhite.svg" alt="">
          </div>
          <div class="info">
            <div class="about">
              <ul>
                <li class="mao">
                  <a href="javascript:;">Application Scenarios</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">Working Principle</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">Ecosystems</a>
                </li>
                <li class="mao">
                  <a href="javascript:;">RoadMap</a>
                </li>
                <li class="mao">
                  <a href="http://blog.lambda.im/">Blog</a>
                </li>
                <li class="mao">
                  <a href="mailto:info@lambda.im">contact us</a>
                </li>
              </ul>
            </div>
            <div class="contact">
              <!-- <h3 class="title">联系我们</h3> -->
              <ul>
                <ul>
                  <li>
                    <a href="https://t.me/HelloLambda" target="_blank"><img src='../images/telegram.png' /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Lambdaim" target="_blank"><img src='../images/twitter.png' /></a>
                  </li>
                  <li className="wechatitem">
                    <a href="https://mp.weixin.qq.com/s/rW3pOxzJwI1HXrTESTYxWA" target="_blank"><img src='../images/wechat.png' /></a>

                  </li>
                  <li>
                    <a href="https://www.facebook.com/Lambdaim" target="_blank"><img src='../images/facebook.png' /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/lambdaim" target="_blank"><img src='../images/linkedin.png' /></a>
                  </li>
                  <li>
                    <a href="https://www.weibo.com/lambdaim?is_all=1" target="_blank"><img src='../images/weibo.png' /></a>
                  </li>

                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      showNav: 'nav'
    }
  },
  methods: {
    handleScroll(e) {
      // console.log(e)
      var scrolled = (window.scrollY || window.pageYOffset) > 50;
      // console.log(window.scrollY);
      if (scrolled) {
        this.$data.showNav = 'nav showNav';
      } else {
        this.$data.showNav = 'nav';
      }

    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-toggle-user {
  width: 25px;
  height: 25px;
  color: white;
}
</style>

<style  lang="less">
@import "./lib/reset.css";
@import "./common/global.less";
@import "./common/grid.less";
@import "./common/header.less";
@import "./common/footer.less";
</style>
