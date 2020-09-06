<template>
  <div id="fillbox">
    <div class="form_box">
      <form action="#" method="post" class="form_content">
        <div class="form_content_box">
          <div class="content">
            <label for="type">
              <span class="icon">*</span>
              <span class="text">请假类型</span>
            </label>
            <select name="type_menu" id="type">
              <option value>请选择请假类型</option>
              <option value="病假">病假</option>
              <option value="事假">事假</option>
              <option value="婚假">婚假</option>
            </select>
          </div>
        </div>
        <div class="form_content_box">
          <div class="content">
            <label for="type">
              <span class="icon">*</span>
              <span class="text">开始时间</span>
            </label>
            <select name="type_menu" id="type">
              <option value>请选择开始时间</option>
            </select>
          </div>
        </div>
        <div class="form_content_box">
          <div class="content">
            <label for="type">
              <span class="icon">*</span>
              <span class="text">结束时间</span>
            </label>
            <select name="type_menu" id="type">
              <option value>请选择结束时间</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
p {
  display: inline-block;
}
#fillbox {
  .form_content {
    .form_content_box {
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 5px;
      box-sizing: border-box;
      .content {
        position: relative;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
        #type {
          position: absolute;
          width: 200px;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          font-size: 12px;
          color: gray;
        }
      }
    }
    .icon {
      float: left;
      font-size: 12px;
      color: red;
    }
    .text {
      float: left;
      font-size: 14px;
    }
  }
}
</style>