<template>
  <div class="component">
    <el-row class="dashboard-card">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="item">
          <div class="icon">
            <font-awesome-icon size="3x" icon="users"/>
          </div>
          <div class="data">
            <span class="value">200010</span>
            <span class="title">用户量</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class=" item">
          <div class="icon">
            <font-awesome-icon size="3x" icon="shopping-cart"/>
          </div>
          <div class="data">
            <span class="value">2004040</span>
            <span class="title">订单数</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class=" item">
          <div class="icon">
            <font-awesome-icon size="3x" icon="city"/>
          </div>
          <div class="data">
            <span class="value">200010</span>
            <span class="title">网点数量</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class=" item">
          <div class="icon">
            <font-awesome-icon size="3x" icon="money-bill-alt"/>
          </div>
          <div class="data">
            <span class="value">200010 <span class="mini">$</span></span>
            <span class="title">交易额</span>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-card.component',
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped lang="scss">

  .dashboard-card {
    overflow: hidden;
    width: 100%;
    padding: 15px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px;
      background-color: #fff;
      padding: 16px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      .icon {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        transition: all .3s;
        border-radius: 2px;
      }

      .data {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .value {
        font-size: 36px;

        .mini {
          font-size: .6em;
        }
      }

      .title {
        font-size: 14px;
        color: #999;
      }
    }

    .item:hover {
      .fa-users {
        color: #fff !important;
      }
    }

    .el-col:nth-child(1) {
      $color: #2185d0;

      .icon {
        svg {
          color: $color;
        }
      }

      .item:hover {
        .icon {
          svg {
            color: #ffffff;
          }

          background-color: $color;
        }
      }
    }


    .el-col:nth-child(2) {
      $color: #59c0c2;

      .icon {
        svg {
          color: $color;
        }
      }

      .item:hover {
        .icon {
          svg {
            color: #ffffff;
          }

          background-color: $color;
        }
      }
    }

    .el-col:nth-child(3) {
      $color: #a333c8;

      .icon {
        svg {
          color: $color;
        }
      }

      .item:hover {
        .icon {
          svg {
            color: #ffffff;
          }

          background-color: $color;
        }
      }
    }

    .el-col:nth-child(4) {
      $color: #db2828;

      .icon {
        svg {
          color: $color;
        }
      }

      .item:hover {
        .icon {
          svg {
            color: #ffffff;
          }

          background-color: $color;
        }
      }
    }

  }

</style>
