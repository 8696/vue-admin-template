<template>
  <div class="">
    <template v-if="__menuCurrentPaths.length > 0
     && $route.name !== __menuCurrentPaths[0].routeName">
      <div @click="navAction" class="tags-list">
        <div data-type="to"
             :data-name="item.routeName"
             :data-id="item.id"
             v-for="item in __tagsList" :class="{active: item.__active}"
             class="item">
          <span data-type="to"
                :data-name="item.routeName"
                :data-id="item.id">{{item.title}}</span>
          <i data-type="delete"
             :data-name="item.routeName"
             :data-id="item.id" class="el-icon-close"></i>
        </div>
      </div>
    </template>

  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },

    methods: {
      async navAction($event) {

        let type = $event.target.getAttribute('data-type'),
          name = $event.target.getAttribute('data-name'),
          id = $event.target.getAttribute('data-id');

        if (type === 'to') {
          return this.$router.push2({name}, () => {
          });
        }
        // 删除
        this.__sliceTagsOneItem(id);
        // 删除后最后为 0 项，则跳转至首页
        if (this.__tagsList.length === 0) {
          return this.$router.replace({path: '/'}, () => {
          });
        }
        // 删除后所有 active 为 false ，则挑选最后一项为 active
        let active = this.__tagsList.some(item => {
          return item.__active;
        });
        if (!active) {
          this.__setTagsOneItemActive(this.__tagsList[this.__tagsList.length - 1].id);
          this.$router.push2({name: this.__tagsList[this.__tagsList.length - 1].routeName}, () => {
          });
        }

      }
    }
  };
</script>

<style scoped>

</style>
