<template>
  <div class="breadcrumb-bar">
    <div class="breadcrumb-line"></div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="menu"
                          :key="index" :to="item.path"
                          v-for="(item, index) in list">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
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
    return {

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
