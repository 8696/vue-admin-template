<template>
  <div>
    <div :id="elementID"></div>
  </div>
</template>

<script>
  import {Chart} from '@antv/g2';
  import {makeRandomString} from '@/utils/utils';

  export default {
    data() {
      return {
        elementID: '',
        chartData: [],
        charInstance: null
      };
    },
    props: {
      data: {
        type: Object,
        default() {
          return {
            pv1: {},
            pv2: {},
            list: []
          };
        }
      }
    },
    async mounted() {
    },
    methods: {
      async render() {

        this.elementID = 'id-' + makeRandomString(6);
        await this.$nextTick();
        try {
          this.destroy();
        } catch (e) {
        }
        this.charInstance = new Chart({
          container: this.elementID,
          autoFit: true,
          height: 380,
        });

        this.charInstance.data(this.data.list);
        this.charInstance.scale({
          date: {
            alias: '日期',
            type: 'time',
          },
          pv1: {
            alias: this.data.pv1.title || '',
            min: 0,
            sync: true,
            nice: true,
            formatter: (value) => {
              return value + this.data.pv1.axisSuffix || '';
            },
          },
          pv2: {
            alias: this.data.pv2.title || '',
            formatter: (value) => {
              return value + this.data.pv2.axisSuffix || '';
            },
            sync: true,
            nice: true,
          }
        });

        this.charInstance.tooltip({
          showCrosshairs: true,
          shared: true,
        });
        this.charInstance.axis('pv1', {
          grid: null,
          title: {},
        });
        this.charInstance.axis('pv2', {
          title: {},
        });
        this.charInstance
          .line()
          .position('date*pv1')
          .color('#4FAAEB');
        this.charInstance
          .line()
          .position('date*pv2')
          .color('#9AD681');
        this.charInstance.render();
      },
      destroy() {
        this.charInstance.destroy();
      }
    }
  };
</script>

<style scoped>

</style>
