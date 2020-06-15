<template>
  <div>
    <div :id="elementID"></div>
  </div>
</template>

<script>
  import DataSet from '@antv/data-set';
  import {Chart} from '@antv/g2';
  import {makeRandomString} from '@/utils/utils';

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
        const {DataView} = DataSet;
        const dv = new DataView().source(this.data);
        dv.transform({
          type: 'map',
          callback(row) {
            row.percent = row.pv / 50000;
            return row;
          },
        });
        const data = dv.rows;
        const chart = this.charInstance = new Chart({
          container: this.elementID,
          autoFit: true,
          height: this.height,
          padding: [20, 120, 95],
        });
        chart.data(data);
        chart.axis(false);
        chart.tooltip({
          showTitle: false,
          showMarkers: false,
          itemTpl:
            '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
            '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
            '{name}<br/>' +
            '<span style="padding-left: 16px;line-height: 16px;">浏览人数：{pv}</span><br/>' +
            '<span style="padding-left: 16px;line-height: 16px;">占比：{percent}</span><br/>' +
            '</li>',
        });
        chart
          .coordinate('rect')
          .transpose()
          .scale(1, -1);
        chart
          .interval()
          .adjust('symmetric')
          .position('action*percent')
          .shape('funnel')
          // '#0050b3'
          .color('action', (() => {
            let arr = [];
            for (let i = 0; i < this.data.length; i++) {
              arr.push('rgba(0,80,180,' + (1 - i / this.data.length) + ')');
            }
            return arr;

          })())
          .label(
            'action*pv',
            (action, pv) => {
              return {
                content: `${action} ${pv}`,
              };
            },
            {
              offset: 35,
              labelLine: {
                style: {
                  lineWidth: 1,
                  stroke: 'rgba(0, 0, 0, 0.15)',
                },
              },
            }
          )
          .tooltip('action*pv*percent', (action, pv, percent) => {
            return {
              name: action,
              percent: +percent * 100 + '%',
              pv,
            };
          })
          .animate({
            appear: {
              animation: 'fade-in'
            },
            update: {
              annotation: 'fade-in'
            }
          });

        chart.interaction('element-active');

        chart.on('beforepaint', () => {
          chart.annotation().clear(true);
          const chartData = chart.getData();
          // 中间标签文本
          chartData.forEach((obj) => {
            chart.annotation().text({
              top: true,
              position: {
                action: obj.action,
                percent: 'median',
              },
              content: +obj.percent * 100 + '%', // 显示的文本内容
              style: {
                stroke: null,
                fill: '#fff',
                textAlign: 'center',
              },
            });
          });
        });

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
