<script>
import { userStore } from "../store/store.js";
import Modal from "../components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      userStore,
      inputName: "",
      inputNrp: "",
      inputEmail: "",
      isModal: false,
    };
  },
  methods: {
    addUser() {
      if (this.inputUser == "") return;
      const newUser = {
        id: Date.now(),
        name: this.inputName,
        nrp: this.inputNrp,
        email: this.inputEmail,
      };
      userStore.createUser(newUser);
      this.inputName = "";
      this.inputNrp = "";
      this.inputEmail = "";
      this.toggleModal()
    },
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<template>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-fit justify justify-center flex flex-col mt-3 px-56">
      <span class="font-bold text-4xl text-gray-700">Users</span>
      <span class="font-base text-sm text-gray-400"
        >{{ userStore.users.length }} users</span
      >
      <div class="w-full flex justify-end">
        <button
          @click="toggleModal"
          class="px-6 py-2 bg-gray-700 text-gray-200 font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm"
        >
          Create
        </button>
        <Modal @close-modal="toggleModal" :isModal="isModal">
          <span class="text-gray-700 font-bold text-2xl">Create User</span>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-gray-700 font-semibold">Name</label>
              <input
                v-model="inputName"
                class="border-2 py-1 border-gray-400 rounded-md"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-gray-700 font-semibold">NRP</label>
              <input
                v-model="inputNrp"
                class="border-2 py-1 border-gray-400 rounded-md"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-gray-700 font-semibold">Email</label>
              <input
                v-model="inputEmail"
                class="border-2 py-1  border-gray-400 rounded-md"
              />
            </div>
          </div>
          <button
            @click="addUser"
            class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
          >
            Submit
          </button>
        </Modal>
      </div>
      <table>
        <thead class="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th class="p-1 text-sm font-bold tracking-wide">No.</th>
            <th class="p-3 text-sm font-bold tracking-wide">Name</th>
            <th class="p-1 text-sm font-bold tracking-wide">NRP</th>
            <th class="p-1 text-sm font-bold tracking-wide">Email</th>
            <th class="p-1 text-sm font-bold tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b"
            v-for="(user, index) in userStore.users"
            :key="user.id"
          >
            <th class="p-3 text-sm text-gray-700 font-normal">
              {{ index + 1 }}
            </th>
            <th class="p-3 text-sm text-gray-700 font-normal">
              {{ user.name }}
            </th>
            <th class="p-3 text-sm text-gray-700 font-normal">
              {{ user.nrp }}
            </th>
            <th class="p-3 text-sm text-gray-700 font-normal">
              {{ user.email }}
            </th>
            <th>
              <div class="flex justify-center gap-4 items-center h-full w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 512 512"
                  class="cursor-pointer"
                >
                  <path
                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                  />
                </svg>
                <svg
                  @click="userStore.deleteUser(user.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  viewBox="0 0 448 512"
                  class="cursor-pointer"
                >
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
