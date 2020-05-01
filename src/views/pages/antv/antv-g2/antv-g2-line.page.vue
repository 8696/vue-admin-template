<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          基础折线图
        </div>
        <div class="card-body">
          <g2-line-basic-component
            :axis-suffix="axisSuffix"
            :data="data"
            :transverse="transverse"
            ref="g2-line-basic-component"
            @hook:mounted="doSomething"
          />
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="card">
        <div class="card-header">
          基础折线图
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

  const G2LineBasicComponent = () => import('@/views/general/antv-g2/g2-line/line-basic.component');
  export default {
    components: {
      G2LineBasicComponent
    },
    data() {
      return {
        // data:
        axisSuffix: 'K',
        transverse: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份',
          '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份',
        ],
        data: [
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
      };
    },
    async mounted() {


    },
    computed: {},
    methods: {
      doSomething() {
        this.data[0].list = [];
        this.data[1].list = [];
        this.data[2].list = [];
        for (let i = 0; i < 12; i++) {

          this.data[0].list.push(makeRandomNumber(200, 400));
          this.data[1].list.push(makeRandomNumber(100, 300));
          this.data[2].list.push(makeRandomNumber(200, 300));
        }

        this.$refs['g2-line-basic-component'].render();
      },
      reload() {
        this.doSomething();
      }
    }
  };
</script>

<style scoped>

</style>
