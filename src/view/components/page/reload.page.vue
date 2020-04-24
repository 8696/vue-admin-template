<template>
  <div>
  </div>
</template>

<script>
  export default {
    async mounted() {
      let reloadRoute = this.__tagsList.find(item => {
        return item.routeName === 'reload';
      });
      this.__sliceTagsOneItem(reloadRoute.id);
      let id = this.$route.query.id;
      let index = this.$route.query.index;
      this.__sliceTagsOneItem(id);
      this.$router.replace2({name: this.$route.query.name}, () => {
      });
      await this.$nextTick();
      this.__setTagsIdToIndex({id, index});
    }
  };
</script>
