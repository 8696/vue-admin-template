<template>
  <div class="scope-markdown" v-html="html"></div>
</template>

<script>
  import marked from 'marked';
  import highlight from 'highlight.js';

  export default {
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        html: ''
      };
    },
    watch: {
      text() {
        this.parse();
      }
    },
    async mounted() {
      this.parse();
    },
    methods: {
      parse() {
        setTimeout(()=>{
          this.html = marked(this.text);
          this.$nextTick()
            .then(() => {
              Array.from(this.$el.getElementsByTagName('pre'))
                .forEach(el => {
                  // 添加行号
                  el.innerHTML =
                    '<div><span class="code-line">' + el.innerHTML
                      .replace(/\n/g, '\n</span><span class="code-line">')
                    + '\n</span></div>';
                  highlight.highlightBlock(el);
                  let lines = Array.from(el.querySelectorAll('.code-line'));
                  lines.forEach((item, index) => {
                    item.innerHTML =
                      `<span class="code-line-number">${this.padTo(index, lines.length)}</span>`
                      + '  ' + item.innerHTML;
                  });
                });
            });
        },0)

      },
      padTo(number, length) {
        number = String(number);
        length = String(length).length;
        length = length < 2 ? 2 : length;
        return (Array(length).join(0) + number).slice(-length);
      }
    }
  };
</script>

<style lang="scss">
  .scope-markdown {
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      background: rgba(245, 247, 250, 0.73);
      border-radius: 3px;
    }

    .hljs,
    .hljs-subst {
      color: #444;
    }

    .hljs-comment {
      color: #adadad;
      font-style: italic;
    }

    .hljs-keyword,
    .hljs-attribute,
    .hljs-selector-tag,
    .hljs-meta-keyword,
    .hljs-doctag,
    .hljs-name {
      font-weight: bold;
    }

    .hljs-type,
    .hljs-string,
    .hljs-number,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-quote,
    .hljs-template-tag,
    .hljs-deletion {
      color: #d14;
    }

    .hljs-title,
    .hljs-section {
      color: #667ec5;
      font-weight: bold;
    }

    .hljs-regexp,
    .hljs-symbol,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-link,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
      color: #BC6060;
    }

    .hljs-literal {
      color: #51a728;
    }

    .hljs-built_in,
    .hljs-bullet,
    .hljs-code,
    .hljs-addition {
      color: #0086b3;
    }

    .hljs-meta {
      color: #1f7199;
    }

    .hljs-meta-string {
      color: #4d99bf;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: bold;
    }

    blockquote {
      border-left: 4px solid #b6b6b6;
      padding: 6px 10px;
      margin: 15px 0;
      background: rgba(245, 247, 250, 0.73);
      overflow: auto;
      box-sizing: border-box;

      p {
        margin: 0;
        color: #5a5a5a;
        white-space: nowrap;
        padding-right: 12px;
        width: max-content;
      }
    }

    pre {

      * {
        font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
      }

      .code-line {
        padding-right: 12px;
        box-sizing: border-box;
      }

      .code-line:hover {
        //background: #f3f3f3;
      }

      .code-line-number {
        color: #c0c0c0;
        position: relative;
        display: inline-block;
        height: 24px;
        /* background: #989898; */
        padding-left: 3px;
        padding-right: 10px;
        user-select: none;
      }

      .code-line-number::after {
        position: absolute;
        background-color: #eaeaea;
        content: ' ';
        width: 1px;
        right: 0;
        top: 0;
        user-select: none;
      }
    }

    pre, p {
      line-height: 24px;
    }

    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    h1 {
      font-size: 28px;
      border-bottom: 1px solid #ddd;
    }

    h2 {
      font-size: 24px;
      border-bottom: 1px solid #ddd;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }

    h5,
    h6 {
      font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 15px 0;
      padding: 0;
      cursor: text;
      position: relative;
      font-weight: 700;
      line-height: 2;
    }

    li {
      margin-top: 2px;
      margin-bottom: 2px;
      display: list-item;
      text-align: -webkit-match-parent;
    }

    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }

    p code,
    ul code,
    h1 code,
    h2 code,
    h3 code,
    h4 code,
    h5 code,
    h6 code {
      color: #a50000;
      background-color: rgba(245, 247, 250, 0.73);
      padding-left: 4px;
      padding-right: 4px;
      font-size: 1.1em;
    }

    aside {
      display: block;
      float: right;
      width: 390px;
    }

    blockquote {
      border-left: .5em solid #eee;
      margin-left: 0;
    }

    blockquote cite {
      font-size: 14px;
      line-height: 20px;
      color: #bfbfbf;
    }

    blockquote cite:before {
      content: '\2014 \00A0';
    }

    blockquote p {
      color: #666;
    }

    hr {
      text-align: left;
      color: #999;
      height: 2px;
      padding: 0;
      margin: 16px 0;
      background-color: #e7e7e7;
      border: 0 none;
    }

    dl {
      padding: 0;
    }

    dl dt {
      padding: 10px 0;
      margin-top: 16px;
      font-size: 1em;
      font-style: italic;
      font-weight: bold;
    }

    dl dd {
      padding: 0 16px;
      margin-bottom: 16px;
    }

    dd {
      margin-left: 0;
    }

    button,
    input,
    select,
    textarea {
      font-size: 100%;
      margin: 0;
      vertical-align: baseline;
      *vertical-align: middle;
    }

    button, input {
      line-height: normal;
      *overflow: visible;
    }

    button::-moz-focus-inner, input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    button,
    input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      cursor: pointer;
      -webkit-appearance: button;
    }

    input[type=checkbox], input[type=radio] {
      cursor: pointer;
    }

    input:not([type="image"]), textarea {
      box-sizing: content-box;
    }

    input[type="search"] {
      box-sizing: content-box;
    }

    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    label,
    input,
    select,
    textarea {
      font-size: 13px;
      font-weight: normal;
      line-height: normal;
      margin-bottom: 18px;
    }

    input[type=checkbox], input[type=radio] {
      cursor: pointer;
      margin-bottom: 0;
    }

    input[type=text],
    input[type=password],
    textarea,
    select {
      display: inline-block;
      width: 210px;
      padding: 4px;
      font-size: 13px;
      font-weight: normal;
      line-height: 18px;
      height: 18px;
      color: #808080;
      border: 1px solid #ccc;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }

    select, input[type=file] {
      height: 27px;
      line-height: 27px;
    }

    textarea {
      height: auto;
    }

    input[type=text],
    input[type=password],
    select,
    textarea {
      transition: border linear 0.2s, box-shadow linear 0.2s;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    input[type=text]:focus, input[type=password]:focus, textarea:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 8px rgba(82, 168, 236, 0.6);
    }

    /* buttons */
    button {
      display: inline-block;
      padding: 4px 14px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 18px;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      background-color: #0064cd;
      background-image: linear-gradient(top, #049cdb, #0064cd);
      color: #fff;
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
      border: 1px solid #004b9a;
      border-bottom-color: #003f81;
      transition: 0.1s linear all;
      border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    }

    button:hover {
      color: #fff;
      background-position: 0 -15px;
      text-decoration: none;
    }

    button:active {
      box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    table {
      *border-collapse: collapse; /* IE7 and lower */
      border-spacing: 0;
      width: 100%;
    }

    table {
      border: solid #ccc 1px;
      border-radius: 2px;
    }

    table tr:hover {
      background: #f6f6f6;
      transition: all 0.1s ease-in-out;
    }

    table td, .table th {
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      padding: 10px;
      text-align: left;
    }

    table th {
      background-color: #dce9f9;
      background-image: linear-gradient(top, #fff, #fff);
      border-top: none;
      text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
      padding: 5px;
    }

    table td:first-child, table th:first-child {
      border-left: none;
    }

    table th:first-child {
      border-radius: 6px 0 0 0;
    }

    table th:last-child {
      border-radius: 0 6px 0 0;
    }

    table th:only-child {
      border-radius: 6px 6px 0 0;
    }

    table tr:last-child td:first-child {
      border-radius: 0 0 0 6px;
    }

    table tr:last-child td:last-child {
      border-radius: 0 0 6px 0;
    }
  }


</style>
