import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },

  mutations: {
    ADD_TASK(state, task) {
      state.tasks = [{ content: task, done: false }, ...state.tasks];
    },
    REMOVE_TASK(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    TOGGLE_TASK(state, task) {
      task.done = !task.done;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
