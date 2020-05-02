<template>
  <div>
    <div :id="elementID"></div>
  </div>
</template>

<script>
  import {Chart} from '@antv/g2';
  import {makeRandomString} from '@/utils/utils';

  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {
            axisSuffix: '',
            transverse: [],
            item: []
          };
        }
      }
    },
    data() {
      return {
        elementID: '',
        chartData: [],
        charInstance: null
      };
    },

    methods: {
      async render() {

        this.chartData = [];
        this.data.item.forEach(item => {
          item.list.forEach((listItem, index) => {
            this.chartData.push({
              transverse: this.data.transverse[index],
              label: item.title,
              value: listItem
            });
          });
        });

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

        this.charInstance.data(this.chartData);

        this.charInstance.scale('transverse', {
          range: [0, 1],
        });
        this.charInstance.scale('value', {
          nice: true, formatter: (val) => {
            return val + this.data.axisSuffix || '';
          }
        });

        this.charInstance.tooltip({
          showCrosshairs: true,
        });

        this.charInstance
          .line()
          .position('transverse*value')
          .shape('hv')
          .color('label');

        this.charInstance.render();
      },
      destroy() {
        this.charInstance.destroy();
      }
    }
  };
</script>
