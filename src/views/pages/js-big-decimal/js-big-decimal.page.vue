<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>数值计算
            <a
              style="font-size: 14px;color: #999999;
            cursor: pointer;font-weight: normal"
              href="https://github.com/royNiladri/js-big-decimal#readme" target="_blank"
            >文档</a>
          </h2>
        </div>
        <div class="card-body">
          <div style="width: 400px">
            <el-input type="number" v-model="input1" placeholder="请输入数值"></el-input>
            <div>
              <br>
            </div>
            <el-select style="width: 100%" v-model="action" placeholder="请选择">
              <el-option label="+" value="+"></el-option>
              <el-option label="-" value="-"></el-option>
              <el-option label="*" value="*"></el-option>
              <el-option label="/" value="/"></el-option>
            </el-select>
            <div>
              <br>
            </div>
            <el-input type="number" v-model="input2" placeholder="请输入数值"></el-input>
          </div>
          <br>
          <div style="display: flex">
            <el-button type="primary" @click="actionAHandle">普通计算</el-button>
            <el-button type="primary" @click="actionBHandle">精确计算</el-button>
          </div>
          <br>
          <div>
            <span>普通计算：{{inputAValue}}</span>
          </div>
          <div>
            <span>精确计算：{{inputBValue}}</span>
          </div>
          <br>
          <div style="opacity: .5;font-size: 13px">
            <div>
              <span>注意：精确计算返回类型为String，而普通的方式永远都是Number类型。</span>
              <span>精确计算除法默认保留8位小数、可设置。 0 也会保留，因此可以使用替换加正则将末尾 0 去除。例：'0.10000000'.replace(/(\.|)[0]+$/,'')</span>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  const BigDecimal = require('js-big-decimal');

  export default {
    data() {
      return {
        input1: '0.1',
        action: '+',
        input2: '0.2',
        inputAValue: '',
        inputBValue: '',
      };
    },
    mounted() {
      this.actionAHandle();
      this.actionBHandle();
    },
    methods: {
      actionAHandle() {
        this.inputAValue = (() => {
          switch (this.action) {
            case '+':
              return Number(this.input1) + Number(this.input2);
            case '-':
              return this.input1 - this.input2;
            case '*':
              return this.input1 * this.input2;
            case '/':
              return this.input1 / this.input2;
          }
        })();
      },
      actionBHandle() {
        this.inputBValue = (() => {
          switch (this.action) {
            case '+':
              return new BigDecimal(this.input1).add(new BigDecimal(this.input2)).getValue();
            case '-':
              return new BigDecimal(this.input1).subtract(new BigDecimal(this.input2)).getValue();
            case '*':
              return new BigDecimal(this.input1).multiply(new BigDecimal(this.input2)).getValue();
            case '/':
              // divide 默认保留8位小数
              return new BigDecimal(this.input1).divide(new BigDecimal(this.input2)).getValue()
                .replace(/(\.|)[0]+$/, '');
          }
        })();
      }
    }
  };
</script>
