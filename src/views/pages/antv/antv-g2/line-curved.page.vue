<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>曲线折线图</h2>
        </div>
        <div class="card-body">
          <g2-line-basic-component
            :data="data"
            :height="400"
            ref="g2-line"
            @hook:mounted="doSomething"
          />
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>曲线折线图</h2>
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

  const G2LineBasicComponent = () => import('@/views/general/antv-g2/g2-line/line-curved.component');
  export default {
    components: {
      G2LineBasicComponent
    },
    data() {
      return {
        data: {
          axisSuffix: 'K',
          transverse: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
            '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份',
          ],
          item: [
            {
              title: '月活增长',
              list: []
            },
            {
              title: '用户增长',
              list: []
            },
            {
              title: '用户增长2',
              list: []
            }
          ]
        }
      };
    },
    async mounted() {
    },
    computed: {},
    methods: {
      doSomething() {
        this.data.item[0].list = [];
        this.data.item[1].list = [];
        this.data.item[2].list = [];
        for (let i = 0; i < 12; i++) {
          this.data.item[0].list.push(makeRandomNumber(200, 400));
          this.data.item[1].list.push(makeRandomNumber(100, 300));
          this.data.item[2].list.push(makeRandomNumber(200, 300));
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
