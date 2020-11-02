<template>
  <footer v-if="footerShow && app == 0" :class="{ phoneX: is_phx }">
    <ul class="footer-content">
      <li
        :style="{ width: 100 / foots.length + '%' }"
        v-for="(item, index) in foots"
        :key="index"
        @click="skip(item)"
      >
        <img
          :class="foot_style ? 'style_two' : 'style_one'"
          :src="$route.name == item.url ? item.nav_img_checked : item.nav_img"
        />
        <font v-if="foot_style" :class="{ 'hover-font': $route.name == item.url }">{{ item.name }}</font>
      </li>
    </ul>
  </footer>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      footer: [],
      foot_style: 1,
      footerShow: 1,
      nav_list: [],
      is_phx: false,
      nav_icon:[
      	{src:require('../assets/images/fwdt@2x.png')},
      	{src:require('../assets/images/fwdt_a@2x.png')},
      	{src:require('../assets/images/fwxx@2x.png')},
      	{src:require('../assets/images/fwxx_a@2x.png')},
      	{src:require('../assets/images/wd@2x.png')},
      	{src:require('../assets/images/wd_a@2x.png')},
      ]
    };
  },
  computed: {
    ...mapState(["app"]),
    foots() {
      return this.footer.filter(item => item.status == 1);
    }
  },
  methods: {
    skip(item) {
      if (item.is_outer == 1) {
        window.location.href = item.url;
      } else {
        if (item.url != this.$route.name) this.$router.push({ name: item.url });
      }
    },
    setNav(val) {
    	console.log(this.nav_list.includes(val.name));
      if (this.nav_list.length == 0) {
        setTimeout(() => {
          this.setNav(val);
        }, 200);
      } else {
        if (this.nav_list.includes(val.name)){
          this.footerShow = 1;
        } else {
          this.footerShow = 0;
        }
      }
    },
    isIphoneX() {
      if (/iphone/gi.test(window.navigator.userAgent)) {
        /* iPhone X、iPhone XS */
        var x = window.screen.width === 375 && window.screen.height === 812;
        /* iPhone XS Max */
        var xsMax = window.screen.width === 414 && window.screen.height === 896;
        /* iPhone XR */
        var xR = window.screen.width === 414 && window.screen.height === 896;
        if (x || xsMax || xR) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  mounted() {
    let _this = this;
    if (this.isIphoneX()) {
      /* 原可视区域 */
      var oldHeight = window.innerHeight;
      window.addEventListener(
        "resize",
        function() {
          /* safari浏览器的操作栏隐藏时可视区域会变大 */
          if (window.innerHeight > oldHeight) {
            /*
                #tabBar 是底部导航栏的选择器
                通过 修改style值 或 改变class值 请自行决定
             */
            _this.is_phx = true;
          } else {
            _this.is_phx = false;
          }
        },
        false
      );
    }
  },
  async created() {
    let data = {
        "index":[
            {
                "name":"服务大厅",
                "url":"Index",
                "nav_img":this.nav_icon[0].src,
                "nav_img_checked":this.nav_icon[1].src,
                "is_outer":0,
                "sort":1,
                "status":1,
                "id":1,
            },
            {
                "name":"服务信息",
                "url":"serviceInformation",
                "nav_img":this.nav_icon[2].src,
                "nav_img_checked":this.nav_icon[3].src,
                "is_outer":0,
                "sort":2,
                "status":1,
                "id":2,
            },
            {
                "name":"我的",
                "url":"personIndex",
                "nav_img":this.nav_icon[4].src,
                "nav_img_checked":this.nav_icon[5].src,
                "is_outer":0,
                "sort":2,
                "status":1,
                "id":3,
            }
        ],
        "style":[
            {
                "id":1,
                "name":"样式一",
                "check":0,
                "style_img":"https://testwx.baijiayun.com/statics/nav/style_1.png"
            },
            {
                "id":2,
                "name":"样式二",
                "check":1,
                "style_img":"https://testwx.baijiayun.com/statics/nav/style_2.png"
            }
        ]
    };
    if (data.style[0].check) {
      // 不带文字
      this.foot_style = 0;
    } else {
      // 带文字
      this.foot_style = 1;
    }
    this.footer = data.index;
    data.index.forEach(item => {
      if (this.$route.name == item.url) {
        document.title = item.name;
      }
      this.nav_list.push(item.url);
      if (item.url == "Group") {
        this.$store.commit("SET_FOOT", 1);
      }
    });
    this.$store.commit("SET_TAB_TITLE", data.index);
  },
  watch: {
    $route(val) {
      this.setNav(val);
    }
  }
};
</script>
<style scoped lang="scss">
footer {
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 1999;
  background-color: white;
  overflow: hidden;
  &.phoneX {
    padding-bottom: 50px;
  }
  .footer-content {
    width: 100%;
    height: 100%;
    display: flex;
    li {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img.style_one {
        width: 54px;
        height: 54px;
      }
      img.style_two {
        width: 50px;
        height: 50px;
      }
      font {
        padding-top: 4px;
        font-size: 22px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #C5C5C5;
      }
      .hover-font {
        color:$theme_color;
      }
    }
  }
}
</style>
