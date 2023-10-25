<script>
import Modal from "../components/Modal.vue";
import CreateUserForm from "../components/CreateUserForm.vue";
import Header from "../components/Header.vue";
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    Modal,
    CreateUserForm,
    Header,
    TodoList
},
};
</script>

<template>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-fit justify justify-center flex flex-col mt-3 px-56">
      <Header />
      <TodoList />
    </div>
  </main>
</template>
