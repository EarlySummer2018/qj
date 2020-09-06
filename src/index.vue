<template>
  <div id="box">
    <div id="header_box">
      <p>请假管理</p>
      <span class="r">
        <i class="circle"></i>
        <i class="circle"></i>
        <i class="circle"></i>
      </span>
    </div>
    <transition name="l" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body,
html,
input,
div,
ul,
li,
dl,
dd,
h3,
p {
  margin: 0;
  padding: 0;
}
#box {
  width: 100%;
  #header_box {
    position: relative;
    width: 100%;
    height: 50px;
    background-color: cyan;
    line-height: 50px;
    p {
      position: absolute;
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      left: 50%;
      transform: translateX(-50%);
      color: rgba($color:white, $alpha: .8);
    }
    span {
      float: right;
      width: 35px;
      height: 50px;
      text-align: center;
      .circle {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background-color: white;
      }
    }
  }
}
.l-enter,
.l-leave-to {
  opacity: 0;
}
.l-enter {
  transform: translateX(100%);
}
.l-leave-to {
  position: absolute;
  transform: translateX(-100%);
}
.l-enter-active,
.l-leave-active {
  transition: all 0.5s ease;
}
</style>