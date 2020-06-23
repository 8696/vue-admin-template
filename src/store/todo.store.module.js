export default {
  namespaced: true,
  state: {
    todoList: [] // [ {status: true}, {status: false} ... ]
  },
  mutations: {
    pushTodoList(state, todo) {
      state.todoList.push(todo);
    },
    clearTodoList(state) {
      state.todoList = [];
    }
  },
  getters: {
    getStatusIsTrue(state) {
      return state.todoList.filter(item => item.status);
    },
    getStatusIsFalse(state) {
      return state.todoList.filter(item => !item.status);
    }
  }

};
