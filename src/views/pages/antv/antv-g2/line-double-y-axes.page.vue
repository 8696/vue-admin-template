<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>双Y轴折线图</h2>
        </div>
        <div class="card-body">
          <g2-line-double-y-component
            :data="data"
            ref="g2-line"
            @hook:mounted="doSomething"
          />
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>双Y轴折线图</h2>
        </div>
        <div class="card-body">
          <div class="el-button" @click="reload">刷新</div>
        </div>
      </div>
    </el-row>

  </div>
</template>

<script>
  import {makeRandomNumber} from '@/utils/utils';

  const G2LineDoubleYComponent = () => import('@/views/general/antv-g2/g2-line/line-double-y-axes.component');
  export default {
    components: {
      G2LineDoubleYComponent
    },
    data() {
      return {
        data: {
          pv1: {
            title: '进入次数',
            axisSuffix: 'K',
          },
          pv2: {
            title: '下单次数',
            axisSuffix: 'K',
          },
          list: []
        }
      };
    },
    async mounted() {
    },
    computed: {},
    methods: {
      doSomething() {
        this.data.list = [];
        for (let i = 0; i < 30; i++) {
          this.data.list.push({
            date: new Date().getTime() - (60 * 60 * 24 * 1000 * i),
            pv1: makeRandomNumber(100,200),
            pv2: makeRandomNumber(100,200),
          });
        }
        this.$refs['g2-line'].render();
      },
      reload() {
        this.doSomething();
      }
    }
  };
</script>

<style scoped>

</style>
