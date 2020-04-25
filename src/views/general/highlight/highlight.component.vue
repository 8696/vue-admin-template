<template>
  <div v-highlight>
    <pre>
      <code :class="type">
        {{code}}
      </code>
    </pre>
  </div>
</template>

<script>
  import Vue from 'vue';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/default.css';

  Vue.directive('highlight', function (el) {
    let highlight = el.querySelectorAll('pre code');
    highlight.forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped>

</style>
