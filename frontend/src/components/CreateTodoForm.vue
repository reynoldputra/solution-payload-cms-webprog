<script>
import axios from "axios";
import { todoStore } from "../store/store.js";

export default {
  emits: ["close-modal"],
  data() {
    return {
      todoStore,
      task: "",
      catId: "",
      cats : []
    };
  },
  methods: {
    async addTodo() {
      if (
        this.catId === "" ||
        this.task === ""
      )
      return;
      const newTodo = {
        task: this.task,
        category: this.catId,
      };
      todoStore.createTodo(newTodo)
      this.task = "";
      this.catId = "";
      this.$emit("close-modal");
    },
  },  
  mounted () {
    axios.get("http://localhost:3000/api/category").then((res) => {
      console.log(res.data.docs)
      this.cats.push(...res.data.docs)
    })
  }
};
</script>

<template>
  <span class="text-gray-700 font-bold text-2xl">Create Todo</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Task</label>
      <input
        v-model="task"
        class="border-2 py-1 border-gray-400 rounded-md"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Category</label>
      <select v-model="catId">
        <option disabled value="">Please select one</option>
        <option v-for="cat in cats" :value="cat.id">{{cat.nama}}</option>
      </select>
    </div>
  </div>
  <button
    @click="addTodo"
    class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Submit
  </button>
</template>
