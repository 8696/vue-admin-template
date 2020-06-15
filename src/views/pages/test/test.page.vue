<template>
  <div style="">
    <el-button v-permission="'a'" @click="open">open</el-button>
    <el-button v-if="hasPermission(['b','c'])" @click="open">open</el-button>
    <el-button @click="add">add</el-button>
    <el-button @click="remove">remove</el-button>
    {{__permissions}}
  </div>
</template>

<script>


  export default {
    data() {
      return {};
    },
    created() {

    },
    computed: {},
    methods: {

      open() {
        this.__clearTagsList();
        this.__clearMenuList();
      },
      add() {
        this.__pushPermissions(['a', 'b']);
      },
      remove() {
        this.__setPermissions([]);
      }
    }
  };
</script>
