import axios from "axios";
import { reactive } from "vue";

export const userStore = reactive({
  users: [
    { id: 0, nrp: "5027211036", name: "Inu", email: "inu@mail.com" },
    { id: 1, nrp: "5027211008", name: "Aloy", email: "aloy@mail.com" },
    { id: 2, nrp: "5027211035", name: "Rifki", email: "rifki@mail.com" },
  ],
  createUser(user) {
    this.users.push(user);
  },
  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    console.log(userIndex)
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  },
  editUser(updatedUser) {
    const userIndex = userStore.users.findIndex((user) => user.id === updatedUser.id);
    if (userIndex !== -1) {
      userStore.users.splice(userIndex, 1, updatedUser);
    } else {
      userStore.users.splice(userIndex + 1, 1, updatedUser);
    }
  }

});

export const todoStore = reactive({
  todos: [
  ],
  async getTodo() {
    const res = await axios.get("http://localhost:3000/api/todos", { params: { depth: 1 } })
    console.log(res.data.docs)
    this.todos = []
    this.todos.push(...res.data.docs)
  },
  async createTodo(todo) {
    const res = await axios.post("http://localhost:3000/api/todos", {
      ...todo
    })

    console.log(res)
    console.log(res.status)
    if(res.status == 201) {
      this.getTodo()
    }
  },
});


