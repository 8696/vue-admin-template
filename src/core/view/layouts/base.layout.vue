<template>
  <div class="base-layout">
    <div class="header">
      <header-component/>
    </div>
    <div class="content">
      <div class="menu">
        <menu-component/>
      </div>
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  const MenuComponent = () => import('../components/menu.component');
  const HeaderComponent = () => import('../components/header.component');
  export default {
    components: {MenuComponent,HeaderComponent},
    data() {
      return {};
    },
    mounted() {
    },
    computed: {},
    methods: {}
  };
</script>

<style scoped lang="scss">

</style>
