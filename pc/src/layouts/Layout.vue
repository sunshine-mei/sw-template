<template>
  <div class="layout-wrap">
    <sw-navbar
        :request="request"
        :isRequest="true"
        :title="title"
    ></sw-navbar>
    <router-view></router-view>
    <sw-footer
        :is-request="isRequest"
        :request="request"
        copy-right="">
    </sw-footer>
  </div>
</template>

<script>
import mixinPortal from '@/layouts/mixin.portal'
import { mapMutations } from 'vuex'
export default {
  name: 'Layout',
  mixins: [
    mixinPortal
  ],
  data(){
    return{
      // logo:{icon:'su-icon-logo',title:'智慧校园'},
      // host:window.location.origin
    }
  },
  created(){
    // this.getUserInfo()
    this.getUserAuth()
  },
  computed: {

  },
  methods: {
    ...mapMutations({
      setUserInfo: 'setUserInfo',
      setUserAuth: 'setUserAuth',
    }),
    getUserInfo(){
      this.$api.getUserInfo().then(res => {
        this.setUserInfo(res.data)
      })
    },
    getUserAuth(){
      this.$api.getUserAuth().then(res => {
        this.setUserAuth(res.data)
      })
    },
    routerHandle(item){
      if(item.server.includes(this.host)){
        this.$router.push({path:item.path})
      }else{
        let path = item.path.replace('/','')
        let route = item.server+path
        window.location.href = route
      }
    },
    checkSelfRoute(){

    },
  }
}
</script>

<style lang="scss">
@import "/src/assets/scss/base.scss";
.layout-wrap {
  width: 100vw;
  height: 100vh;
  background: $bg-color;
  overflow-x: hidden;

  /**下拉列表组件下拉框选项样式覆盖**/
  .select-option {
    padding: 0 14px;
    line-height: 32px;
    color: $title-color;

    &.selected {
      background: #D5EBFD;
      color: $title-color;
      font-weight: $font-bold;
    }
  }

  /**箭头展开动画**/
  .arrowTransform {
    transition: 0.3s ease;
    transform-origin: center;
    transform: rotateZ(180deg);
  }

  /**箭头收起动画**/
  .arrowTransformReturn {
    transition: 0.3s ease;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  /**淡入淡出动画**/
  .a-fade-enter-active {
    transition: opacity .5s;
  }

  .a-fade-enter {
    opacity: 0;
  }

  .a-fade-leave-active {
    transition: opacity .5s;
  }

  .a-fade-leave-to {
    opacity: 0;
  }
}
</style>
