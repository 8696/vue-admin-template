<template>
  <div class="page">
    <container-component>
      <sub-container-component fixed="top" height="50px">
        顶部1 - {{time}}
      </sub-container-component>
      <sub-container-component fixed="top" height="60px">
        顶部2- {{time}}
      </sub-container-component>
      <sub-container-component fixed="top" height="70px">
        顶部3- {{time}}
      </sub-container-component>

      <sub-container-component fixed="main">
        <div v-for="item in 100">内容A {{item}} - {{time}}</div>
      </sub-container-component>
      <sub-container-component fixed="main">
        <div v-for="item in 100">内容B {{item}} - {{time}}</div>
      </sub-container-component>

      <sub-container-component fixed="bottom" height="20px">
        底部2 - {{time}}
      </sub-container-component>
      <sub-container-component fixed="bottom" height="30px">
        底部1 - {{time}}
      </sub-container-component>

    </container-component>
  </div>
</template>

<script>
  const ContainerComponent = () => import('@/views/general/container/container.component');
  const SubContainerComponent = () => import('@/views/general/container/sub-container.component');
  export default {
    components: {
      ContainerComponent,
      SubContainerComponent
    },
    data() {
      return {
        time: ''
      };
    },
    mounted() {
      setInterval(() => {
        this.time = Math.random();
      }, 3000);

    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>
