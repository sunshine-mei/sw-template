<template>
  <div class="home-page">
    <div class="home-container">
      <div class="breadcrumb">
        <breadcrumb-bar :list="breadcrumbList"></breadcrumb-bar>
      </div>
      <div class="home-content">
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
  components: {
    EmptyData,
    BreadcrumbBar
  },
  data() {
    return {
      breadcrumbList: [{
        path: '/index',
        name: '校内班车查询'
      }],
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/base.scss";
 .home-page{
   width: 100%;
   min-height: calc(100% - 100px);
   background: #f5f7f9;
   .home-container {
     @include center-container;
     padding-bottom: 80px;
     .breadcrumb{
       padding: 16px 0;
     }
   }
 }
</style>
