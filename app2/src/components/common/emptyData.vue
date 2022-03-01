<template>
  <view class="cus-empty">
    <u-empty v-bind="$attrs" v-on="$listeners" :icon="emptyImg" :width="width" :iconSize="iconSize" text=" ">
      <view class="remark">{{text}}</view>
    </u-empty>
  </view>
</template>

<script>
export default {
  name: "emptyData",
  props: {
    width: {
      type: [Number, String],
      default: 360
    },
    iconSize: {
      default: 514
    },
    text: {
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
.cus-empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .remark {
    width: 330rpx;
    font-size: 30rpx;
    color: #B6BAC0;
    line-height: 42rpx;
    text-align: center;
  }
}
</style>
