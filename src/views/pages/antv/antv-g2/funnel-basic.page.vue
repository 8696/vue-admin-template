<template>
  <div style="width: 50%">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>堆叠面积图</h2>
        </div>
        <div class="card-body">
          <g2-funnel-basic-component
            :data="data"
            :height="400"
            ref="g2-funnel"
            @hook:mounted="doSomething"
          />
        </div>
      </div>

    </el-row>
  </div>
</template>

<script>
  const G2FunnelBasicComponent = () => import('@/views/general/antv-g2/g2-funnel/funnel-basic.componeent');

  export default {
    components: {
      G2FunnelBasicComponent
    },
    data() {
      return {
        data: [
          {action: '浏览网站', pv: 50000},
          {action: '放入购物车', pv: 35000},
          {action: '生成订单', pv: 25000},
          {action: '支付订单', pv: 15000},
          {action: '完成交易', pv: 8000},
        ]
      };
    },
    mounted() {
    },
    computed: {},
    methods: {
      doSomething() {
        this.$refs['g2-funnel'].render();
      }
    }
  };
</script>

<style scoped>

</style>
