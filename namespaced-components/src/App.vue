<script setup>
// import MyInput from "./components/Forms/MyInput.vue";
// import MySelect from "./components/Forms/MySelect.vue";
// import MyLabel from "./components/Forms/MyLabel.vue";
import * as Form from "./components/form-components.js";
</script>

<template>
  <!-- <MyLabel>
    Başlık
    <MyInput />
  </MyLabel>
  <MyLabel>
    Kategori
    <MySelect />
  </MyLabel> -->

  <Form.MyLabel>
    Başlık
    <Form.MyInput />
  </Form.MyLabel>
  <Form.MyLabel>
    Kategori
    <Form.MySelect />
  </Form.MyLabel>
</template>