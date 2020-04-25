<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
  import {Chart} from '@antv/g2';
  import {makeRandomNumber} from '../../../utils/utils';

  export default {
    data() {
      return {};
    },
    props: {
      id: {
        type: [String, Number],
        default: new Date().getTime()
      }
    },
    async mounted() {
      await this.$nextTick();
      const data = [];

      for (let i = 1; i <= 12; i++) {
        data.push({
          month: i + '月份',
          label: '用户增长',
          temperature: makeRandomNumber(100, 300)
        });
        data.push({
          month: i + '月份',
          label: '月活增长',
          temperature: makeRandomNumber(200, 400)
        });
      }
      console.log(this.id)
      const chart = new Chart({
        container: this.id,
        autoFit: true,
        height: 380,
      });

      chart.data(data);
      chart.scale({
        month: {
          range: [0, 1],
        },
        temperature: {
          nice: true,
        },
      });

      chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart.axis('temperature', {
        label: {
          formatter: (val) => {
            return val;
          },
        },
      });

      chart
        .line()
        .position('month*temperature')
        .color('label')
        .shape('smooth');

      chart
        .point()
        .position('month*temperature')
        .color('label')
        .shape('circle');

      chart.render();
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>
