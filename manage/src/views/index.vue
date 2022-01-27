<template>
  <div class="home-page">
    <div class="home-container">
      <breadcrumb-bar :list="breadcrumbList"></breadcrumb-bar>
      <div class="home-content">
        <h1>校内班车管理</h1>
        <br/>
        <router-link to="/">当前页</router-link>
        <br/>
        <div style="height: 400px">
          <empty-data></empty-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BreadcrumbBar from "../components/common/breadcrumbBar";
import EmptyData from "../components/common/emptyData";
export default {
  name: "index",
  components: {EmptyData, BreadcrumbBar},
  data() {
    return {
      breadcrumbList: [
        {name: '校内班车管理', path: ''}
      ]
    }
  },
  created() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/base.scss";

.home-page {
  width: 100%;
  height: 100vh;
  background: $bg-color;

  .home-container {
    padding-bottom: 50px;

    .home-content {
      padding: 50px 0 0 50px;

      a {
        line-height: 50px;
      }
    }
  }
}
</style>
