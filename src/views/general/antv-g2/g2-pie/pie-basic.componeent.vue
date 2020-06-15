<template>
  <div>
    <div :id="elementID"></div>
  </div>
</template>

<script>
  import {Chart} from '@antv/g2';
  import {makeRandomString} from '@/utils/utils';

  const BigDecimal = require('js-big-decimal');
  export default {
    data() {
      return {
        elementID: '',
        charInstance: null
      };
    },
    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      /**
       * @description 文字偏移
       * */
      textOffset: {
        type: Number,
        default: 30
      },
      /**
       * @description 高度
       * */
      height: {
        type: Number,
        default: 400
      }
    },
    computed: {},
    methods: {
      async render() {

        this.elementID = 'id-' + makeRandomString(6);
        await this.$nextTick();
        try {
          this.destroy();
        } catch (e) {
        }
        // 统计总数
        let count = this.data.reduce((prev, curr) => {
          if (typeof prev === 'object') {
            return prev.count + curr.count;
          }
          return prev + curr.count;
        });

        let data = this.data.map((item, index) => {
          item.percent = Number(Number(
            new BigDecimal(item.count).divide(new BigDecimal(count)).getValue()
          ).toFixed(4));
          return item;
        });

        this.charInstance = new Chart({
          container: this.elementID,
          autoFit: true,
          height: this.height,
        });

        this.charInstance.coordinate('theta', {
          radius: 0.75,
        });

        this.charInstance.data(data);

        this.charInstance.scale('percent', {
          formatter: (val) => {
            val = val * 100 + '%';
            return val;
          },
        });

        this.charInstance.tooltip({
          showTitle: false,
          showMarkers: false,
        });

        this.charInstance
          .interval()
          .position('percent')
          .color('title')
          .label('percent', {
            content: (data) => {
              return `${data.title}: ${new BigDecimal(data.percent).multiply(new BigDecimal(100)).getValue()}%`;
            },
            offset: this.textOffset,
          })
          .adjust('stack');

        this.charInstance.interaction('element-active');

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
