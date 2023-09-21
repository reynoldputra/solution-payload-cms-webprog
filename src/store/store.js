import { reactive } from "vue";

export const userStore = reactive({
  users: [
    { id: 1, nrp: "5027211036", name: "Inu", email: "inu@mail.com" },
    { id: 2, nrp: "5027211008", name: "Aloy", email: "aloy@mail.com" },
    { id: 2, nrp: "5027211035", name: "Rifki", email: "aloy@mail.com" },
  ],
  createUser(user) {
    this.users.push(user);
  },
  deleteUser(userId) {
    console.log("test")
    const userIndex = this.users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  },
});
