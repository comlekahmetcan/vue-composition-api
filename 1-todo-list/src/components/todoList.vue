<template>
  <section class="mt-4">
    <TodoListItem @delete-event="$emit('delete-event',$event)" v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" />
    <small>Toplam: {{ todoLength }} adet task vardır</small>
    <MySummary :todoList="todoList"/>
  </section>
</template>

<script>
import TodoListItem from "./todoListItem.vue";
import MySummary from "./MySummary.vue";
import { computed } from "vue";
export default {
  components: {
    TodoListItem,
    MySummary,
  },
  props: {
    todoList: Array,
  },
  setup(props) {
    const todoLength = computed(() => props.todoList.length);
    return { todoLength };
  },
};
</script>