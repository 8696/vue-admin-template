# 基本组件

该项目封装了一些比较常见的组件，位置位于`/src/views/general`。

这些组件直接在被需要使用的组件中直接`import`或者`懒加载`的方式导入使用即可。无需考虑这个组件使用的了哪些依赖，也不必考虑重复使用多次数据错误、样式错乱的问题


### 一、案例

```html
<template>
  <div>
    <div class="card-body">
      <g2-line-basic-component
        :axis-suffix="axisSuffix"
        :data="data"
        :transverse="transverse"
        ref="g2-line-basic-component"
        @hook:mounted="doSomething"
      />
  </div>
</template>
<script>
  import {makeRandomNumber} from '@/utils/utils';
  import G2LineBasicComponent from '@/views/general/antv-g2/g2-line/line-basic.component'
  export default {
    components: {
      G2LineBasicComponent
    },
    data() {
      return {
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
    methods: {
      doSomething() {
        for (let i = 0; i < 12; i++) {
          this.data[0].list.push(makeRandomNumber(200, 400));
          this.data[1].list.push(makeRandomNumber(100, 300));
          this.data[2].list.push(makeRandomNumber(200, 300));
        }
        this.$refs['g2-line-basic-component'].render();
      }
    }
  };
</script>
```

### 二、开发建议

- 使用`懒加载`方式加载组件

在用户实际操作中，例如修改密码这个组件。使用频率并不是很高，所以并不用每次都同步加载。在`webpack`中使用懒加载非常简单，例如上面代码第14行直接改成：
```javascript
const G2LineBasicComponent = () => import('@/views/general/antv-g2/g2-line/line-basic.component');
```

