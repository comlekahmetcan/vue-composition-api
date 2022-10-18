<template>
  <section class="mt-4">
    <TodoListItem />
    <small>{{ todoLength }} adet Item vardır</small>
    <MySummary />
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