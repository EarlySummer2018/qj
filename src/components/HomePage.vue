<template>
  <div id="home">
    <div class="title">
      <dl>
        <dt>请假管理</dt>
        <dd>准确高效的管理你的请假信息</dd>
      </dl>
      <div class="title_img">
        <img src="../images/qingjiaguanli-.png" alt="图片" />
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <img src="../images/shangbaoqingjia-.png" alt="图片" />
          <router-link to="/home/filling" class="declaration">
            <h3>申报请假</h3>
            <p>在线提交请假表单</p>
          </router-link>
        </li>
        <li>
          <img src="../images/leasingcloud_xiaojiashenqing.png" alt="图片" />
          <router-link to="javascript:;" class="statistics">
            <h3>请销假统计</h3>
            <p>请销假记录的统计汇总数据</p>
          </router-link>
        </li>
        <li>
          <img src="../images/wodeqingjiajilu.png" alt="图片" />
          <router-link to="javascript:;" class="record">
            <h3>请假记录</h3>
            <p>查看和审批已发布的请假记录</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
li {
  list-style: none;
}
#home {
  border-top: 1px solid white;
  .title {
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #3d97c9;
    dl {
      position: absolute;
      top: 30px;
      left: 30px;
      color: rgba($color: white, $alpha: 0.8);
      dt {
        font-size: 14px;
        font-weight: bold;
      }
      dd {
        margin-top: 15px;
        font-size: 12px;
      }
    }
    .title_img {
      position: absolute;
      top: 10px;
      right: 5px;
      width: 100px;
      height: 100px;
    }
  }
  .nav {
    li {
      padding: 15px 0 15px 30px;
      border-bottom: 1px solid gray;
      .declaration,
      .statistics,
      .record {
        display: inline-block;
        margin-left: 10px;
        color: gray;
      }
      p {
          margin-top: 10px;
          font-size: 12px;
        }
      h3 {
        font-size: 14px;
        font-weight: normal;  
      }
      .declaration {
        h3 {
          color: limegreen;
        }
      }
      .statistics {
        h3 {
          color: #3d97c9;
        }
      }
      .record {
        h3 {
          color: lightcoral;
        }
      }
    }
  }
}
</style>