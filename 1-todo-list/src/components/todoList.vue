<template>
  <section class="mt-4">
    <TodoListItem />
    <MySummary />
  </section>
</template>

<script>
import TodoListItem from "./todoListItem.vue";
import MySummary from "./MySummary.vue";
export default {
  components: {
    TodoListItem,
    MySummary,
  },
};
</script>