<template>
  <div class="layout-wrap">
    <div class="layout-aside"></div>
    <div class="layout-section" v-loading="loading">
      <router-view v-if="!loading"></router-view>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'Layout',
  data() {
    return {
      loading: true
    }
  },
  created() {
    if (!sessionStorage.getItem('userInfo')) {
      this.getUserInfo().then(() => {
        this.loading = false
      })
    } else {
      this.loading = false
    }
  },
  computed: {},
  methods: {
    ...mapMutations({
      setUserInfo: 'setUserInfo',
    }),
    getUserInfo(){
      this.loading = true
      return this.$api.user.getUserInfo().then(res => {
        if (res.code === 200 && res.data) {
          this.setUserInfo(res.data)
        }
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
@import "/src/assets/scss/base.scss";

.layout-wrap {
  width: 100%;
  height: 100%;

  .layout-aside {
    width: 50px;
    background: linear-gradient(90deg, #15314A 0%, #0E2233 100%);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .layout-section {
    margin-left: 50px;
    width: calc(100% - 50px);

    .breadcrumb-bar {
      height: 32px;
      padding-left: 20px;
      background: #F4F8FC;
      @include flex-row(1);

      .breadcrumb-line {
        width: 3px;
        height: 12px;
        background: linear-gradient(177deg, #61C1BE 0%, #3394E1 100%);
        margin-right: 4px;
      }

      .el-breadcrumb {
        .el-breadcrumb__inner {
          font-size: 12px;
          line-height: 20px;
          font-weight: normal;

          &.is-link {
            color: rgba(2, 21, 37, 0.55);
          }
        }

        .el-breadcrumb__separator[class*=icon] {
          margin: 0 4px;
        }
      }

      .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: #021525 !important;
      }
    }
  }

  /**下拉列表组件下拉框选项样式覆盖**/
  .select-option {
    padding: 0 14px;
    line-height: 32px;
    color: $title-color;

    &.selected {
      background: #D5EBFD;
      color: rgba(2, 21, 37, 0.85);
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
}
</style>
