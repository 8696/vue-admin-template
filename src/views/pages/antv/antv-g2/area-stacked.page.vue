<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>堆叠面积图</h2>
        </div>
        <div class="card-body">
          <g2-area-stacked-component
            :data="data"
            ref="g2-area"
            @hook:mounted="doSomething"
          />
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>堆叠面积图</h2>
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

  const G2AreaStackedComponent = () => import('@/views/general/antv-g2/g2-area/area-stacked.component');
  export default {
    components: {
      G2AreaStackedComponent
    },
    data() {
      return {
        data: {
          axisSuffix: 'K',
          year: ['2011', '2012', '2013', '2014', '2015', '2016',
            '2017', '2018', '2019', '2020'],

          item: [
            {
              title: '用户增长',
              list: []
            },
            {
              title: '用户增长2',
              list: []
            },
            {
              title: '用户增长3',
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
        for (let i = 0; i < 10; i++) {
          this.data.item[0].list.push(makeRandomNumber(200, 400));
          this.data.item[1].list.push(makeRandomNumber(100, 300));
          this.data.item[2].list.push(makeRandomNumber(200, 300));
        }

        this.$refs['g2-area'].render();
      },
      reload() {
        this.doSomething();
      }
    }
  };
</script>

<style scoped>

</style>
