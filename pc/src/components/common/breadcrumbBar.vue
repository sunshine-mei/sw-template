<template>
  <div class="breadcrumb-bar-component">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="menu"
                          :key="index" :to="item.path"
                          v-for="(item, index) in list">{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="$store.state.userAuth" @click.stop="toManage" class="breadcrumb-bar-component-navBtn">
      <img src="@/assets/img/icon/manage.png" alt="">
      校内班车管理
    </div>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbBar',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    toManage() {
      window.open(`${serverConfig.BACKEND_BASE_URL}/school-bus-manage/`, "_blank");
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb-bar-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &-navBtn {
    position: absolute;
    right: 0;
    color: #0076D5;
    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
      margin-right: 5px;
      width: 16px;
      height: 16px;
    }
  }

  /deep/ .el-breadcrumb {
    .el-breadcrumb__inner {
      color: #666666;

      &.is-link {
        font-weight: normal;
        color: #666666;
      }
    }

    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #0076D5 !important;
    }
  }
}
</style>
