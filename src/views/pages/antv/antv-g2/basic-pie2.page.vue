<template>
  <div style="width: 50%">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>基础饼图</h2>
        </div>
        <div class="card-body">
          <g2-basic-pie-component
            :data="data"
            :text-offset="textOffset"
            :height="400"
            ref="g2-pie"
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

  const G2BasicPieComponent = () => import('@/views/general/antv-g2/g2-pie/pie-basic.componeent');
  export default {
    components: {
      G2BasicPieComponent
    },
    data() {
      return {
        data: [
          {title: '示例A', count: 0},
          {title: '示例B', count: 0},
          {title: '示例C', count: 0},
          {title: '示例D', count: 0},
          {title: '示例E', count: 0}
        ],
        textOffset: -18
      };
    },
    async mounted() {
    },
    computed: {},
    methods: {
      doSomething() {
        for (let i = 0; i < 5; i++) {
          this.data[i].count = makeRandomNumber(1000, 9999);
        }
        this.$refs['g2-pie'].render();
      },
      reload() {
        this.doSomething();
      }
    }
  };
</script>

<style scoped>

</style>
