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
            axisSuffix: '',
            year: [],
            item: []
          };
        }
      },
      /**
       * @description 容器高度
       * */
      height: {
        type: Number,
        default: 400
      }
    },
    mounted() {
    },
    computed: {},
    methods: {
      async render() {

        this.chartData = [];
        this.data.item.forEach(item => {
          item.list.forEach((listItem, index) => {
            this.chartData.push({
              year: this.data.year[index],
              label: item.title,
              value: listItem
            });
          });
        });
        try {
          this.destroy();
        } catch (e) {
        }
        this.elementID = 'id-' + makeRandomString(6);
        await this.$nextTick();
        this.charInstance = new Chart({
          container: this.elementID,
          autoFit: true,
          height: this.height,
        });
        this.charInstance.data(this.chartData);
        this.charInstance.scale('year', {
          type: 'linear',
          tickInterval: this.data.year.length > 1 ? this.data.year[1] - this.data.year[0] : 1,
        });
        this.charInstance.scale('value', {
          nice: true, formatter: (val) => {
            return val + this.data.axisSuffix || '';
          }

        });

        this.charInstance.tooltip({
          showCrosshairs: true,
          shared: true,
        });

        this.charInstance
          .area()
          .adjust('stack')
          .position('year*value')
          .color('label');
        this.charInstance
          .line()
          .adjust('stack')
          .position('year*value')
          .color('label');

        this.charInstance.interaction('element-highlight');

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
