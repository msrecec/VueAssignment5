const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      activeList: true,
    };
  },
  methods: {
    addTask() {
      if(this.enteredTask) {
        this.tasks.push({
          task: this.enteredTask,
          key: this.tasks.length,
        });
      }
    },
    removeTask(taskId) {
      this.tasks.splice(taskId, 1);
    },
    toggleListVisibility() {
      this.activeList = !this.activeList;
    },
  },
});

app.mount('#assignment');
