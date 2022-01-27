<template>
  <div class="empty-data-component">
    <img :src="imgUrl" alt="empty-data">
    <p>{{ remark }}</p>
  </div>
</template>

<script>
export default {
  name: "emptyData",
  props: {
    remark: {
      type: String,
      default: '暂无内容'
    }
  },
  data() {
    return {
      imgUrl: require('../../assets/img/pictures/empty-data.png')
    }
  }
}
</script>

<style lang="scss" scoped>

.empty-data-component {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: 198px;
    display: block;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666666;
    line-height: 22px;
  }
}
</style>
