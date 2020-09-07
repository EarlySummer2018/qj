<template>
  <div id="fillbox">
    <div class="form_box">
      <form action method="post" class="form_content">
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
            <label for="startTime">
              <span class="icon">*</span>
              <span class="text">开始时间</span>
            </label>
            <input
              type="text"
              id="startTime"
              v-model="date"
              placeholder="请选择开始时间"
              @click="start"
              onfocus="this.blur()"
              required
            />
          </div>
        </div>
        <div class="form_content_box">
          <div class="content">
            <label for="endTime">
              <span class="icon">*</span>
              <span class="text">结束时间</span>
            </label>
            <input
              type="text"
              id="endTime"
              v-model="date1"
              placeholder="请选择开始时间"
              @click="end"
              onfocus="this.blur()"
              required
            />
          </div>
        </div>
        <div class="form_content_box">
          <div class="content">
            <label for="patriarch">
              <span class="icon">*</span>
              <span class="text">家长姓名</span>
            </label>
            <input type="text" id="patriarch" class="patriarch" placeholder="请输入家长姓名" required />
          </div>
        </div>
        <div class="form_content_box1">
          <div class="content_c">
            <label for="label_course">
              <span class="text">&nbsp;请假课程</span>
            </label>
            <input type="text" id="label_course" class="course" placeholder="请输入请假课程" required />
          </div>
        </div>
        <div class="form_content_box1">
          <div class="content_r">
            <label for="reason">
              <span class="text">&nbsp;请假理由</span>
            </label>
            <input type="text" id="reason" class="course" placeholder="请输入请假理由" required />
          </div>
        </div>
        <div class="btn_box">
          <div class="shadow_box">
            <input type="submit" value="提交" class="btn"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      date1: "",
    };
  },
  methods: {
    start() {
      this.$picker.show({
        type: "datePicker",
        date: "2020-01-01",
        endTime: "2099-12-31",
        startTime: "1960-01-01",
        onOk: (e) => {
          this.date = e;
        },
      });
    },
    end() {
      this.$picker.show({
        type: "datePicker",
        date: "2020-01-01",
        endTime: "2099-12-31",
        startTime: "1960-01-01",
        onOk: (e) => {
          this.date1 = e;
        },
      });
    },
  },
};
</script>

<style lang="scss">
p {
  display: inline-block;
}
input {
  outline: none;
}
#fillbox {
  height: 100vh;
  background-color: #f8f8f8;
  .form_content {
    background-color: white;
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
        #type,
        #startTime,
        #endTime,
        .patriarch,
        .course {
          position: absolute;
          width: 200px;
          height: 40px;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          font-size: 12px;
          color: gray;
        }
        #endTime,
        #startTime,
        .patriarch,
        .course {
          text-indent: 4px;
        }
      }
    }
    .form_content_box1 {
      width: 100%;
      height: 80px;
      line-height: 80px;
      padding: 5px;
      box-sizing: border-box;
      .content_c,
      .content_r {
        position: relative;
        width: 100%;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
        #type,
        #startTime,
        #endTime,
        .patriarch,
        .course {
          position: absolute;
          width: 200px;
          height: 70px;
          line-height: 70px;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          font-size: 12px;
          color: gray;
        }
        #endTime,
        #startTime,
        .patriarch,
        .course {
          text-indent: 4px;
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
    .btn_box {
      position: fixed;
      width: 100%;
      height: 60px;
      bottom: 0;
      padding: 5px;
      box-sizing: border-box;
      .shadow_box {
        width: 100%;
        height: 50px;
        padding: 5px 10px;
        background-color: white;
        border-radius: 2px;
        box-sizing: border-box;
        box-shadow: 0px -1px 3px gray;
        .btn {
          width: 100%;
          height: 40px;
          color: white;
          background-color: #49a2e6;
          border: none;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>