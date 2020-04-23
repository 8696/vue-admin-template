<template>
  <div>
    reload.page
  </div>
</template>

<script>
  import {sleep} from '../../../core/utils/utils';

  export default {
    name: 'reload.page',
    data() {
      return {};
    },
    async mounted() {
      let reloadRoute = this.__tagsList.find(item => {
        return item.routeName === 'reload';
      });
      this.__sliceTagsOneItem(reloadRoute.id);
      this.$router.replace2({name: this.$route.query.name});

    },
    computed: {},
    methods: {}
  };
</script>

<style scoped>

</style>
