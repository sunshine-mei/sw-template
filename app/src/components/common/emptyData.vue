<template>
  <u-empty v-bind="$attrs" v-on="$listeners" :src="emptyImg" :icon-size="iconSize" text=" ">
    <view class="remark" slot="bottom">{{remark}}</view>
  </u-empty>
</template>

<script>
export default {
  name: 'emptyData',
  props: {
    iconSize: {
      default: 514
    },
    remark: {
      type: String,
      default: '数据为空',
    }
  },
  data () {
    return {
      emptyImg: require('@/static/img/empty-data.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.remark {
  width: 330rpx;
  font-size: 30rpx;
  color: #B6BAC0;
  line-height: 42rpx;
  text-align: center;
}
</style>
