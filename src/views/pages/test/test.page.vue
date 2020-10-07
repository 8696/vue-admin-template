<template>
  <div style="">
    <p>
      <el-button @click="pushTodoList">push</el-button>
      <el-button @click="__clearTodoList">clear</el-button>
    </p>
    <p>{{ todoList }}</p>

    <p>
      {{getStatusIsTrue}}
    </p>
    <p>
      {{getStatusIsFalse}}
    </p>

  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  export default {
    data() {
      return {};
    },
    created() {
      console.log('test created')
    },
    mounted() {
    },
    computed: {
      ...mapState({
        todoList: state => state.todo.todoList
      }),
      ...mapGetters('todo', {
        getStatusIsTrue: 'getStatusIsTrue',
        getStatusIsFalse: 'getStatusIsFalse'
      })
    },
    methods: {
      ...mapMutations('todo', {
        __pushTodoList: 'pushTodoList',
        __clearTodoList: 'clearTodoList',
      }),
      pushTodoList() {
        this.__pushTodoList({
          status: new Date().getTime() % 2 === 0,
        });
      }
    }
  };
</script>
