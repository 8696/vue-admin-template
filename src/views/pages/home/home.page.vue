<template>
  <div class="page">

    <dashboard-card-component/>

    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>用户增长</h2>
        </div>
        <div class="card-body">
          <g2-line-basic-component
            :data="data"
            ref="g2-line"
            @hook:mounted="doSomething"
          />
        </div>
      </div>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-header">
            <h2>站点数据</h2>
          </div>
          <div class="card-body">
            <g2-funnel-basic-component
              :data="data2"
              ref="g2-funnel"
              @hook:mounted="doSomething2"
            />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="card-header">
            <h2>下单热榜</h2>
          </div>
          <div class="card-body">
            <!--            <line01-component/>-->
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  const DashboardCardComponent = () => import('@/views/general/dashboard-card/dashboard-card.component');
  const G2LineBasicComponent = () => import('@/views/general/antv-g2/g2-line/line-curved.component');
  const G2FunnelBasicComponent = () => import('@/views/general/antv-g2/g2-funnel/funnel-basic.componeent');

  import {makeRandomNumber} from '@/utils/utils';

  export default {

    components: {
      DashboardCardComponent,
      G2LineBasicComponent,
      G2FunnelBasicComponent
    },
    data() {
      return {
        data: {
          axisSuffix: 'K',
          transverse: [],
          item: [
            {
              title: '月活增长',
              list: []
            },
            {
              title: '用户增长',
              list: []
            }
          ]
        },
        data2: [
          {action: '浏览网站', pv: 50000},
          {action: '放入购物车', pv: 35000},
          {action: '生成订单', pv: 25000},
          {action: '支付订单', pv: 15000},
          {action: '完成交易', pv: 8000},
        ]
      };

    },
    methods: {
      doSomething() {
        let dataArr = [];
        let data = new Date();
        data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
        for (let i = 0; i < 12; i++) {
          data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
          let m = data.getMonth() + 1;
          m = m < 10 ? '0' + m : m;
          dataArr.push(data.getFullYear() + '年' + m + '月');
        }

        this.data.transverse = dataArr.reverse();

        this.data.item[0].list = [];
        this.data.item[1].list = [];
        for (let i = 0; i < 12; i++) {
          this.data.item[0].list.push(makeRandomNumber(200, 400));
          this.data.item[1].list.push(makeRandomNumber(100, 300));
        }
        // 渲染
        this.$refs['g2-line'].render();
      },
      doSomething2() {

        // 渲染
        this.$refs['g2-funnel'].render();

      },
    }

  };
</script>

