<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoiceList"/>
    <invoice-content :saveInvoice="saveInvoice" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import appSidebar from "./components/appSidebar.vue";
import invoiceContent from "./components/invoiceContent.vue";
const invoiceList = ref([]);
const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
};
</script>