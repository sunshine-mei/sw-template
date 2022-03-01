<script>
export default {
  name:'App',
  globalData: {
    ruleObj:{}
  },
  onLaunch(){

  },
  onShow(){

  },
  methods:{

  }
}
</script>

<style lang="scss">
// 引入 uView 组件的样式
@import "~uview-ui/index.scss";
/* #ifndef APP-PLUS */
page {
  width: 100%;
  height: 100%;
}
/* #endif */
// 动画效果
  .fade-in-bottom {
    -webkit-animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-bottom 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @-webkit-keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(130px);
      transform: translateY(130px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(130px);
              transform: translateY(130px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  .fade-in {
    -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .scale-in-center {
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }

  .scale-out-center {
    -webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
  @-webkit-keyframes scale-out-center {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes scale-out-center {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
  }


</style>
