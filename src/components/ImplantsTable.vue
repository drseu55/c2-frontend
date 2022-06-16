<script setup>
import { ref } from "vue";
import { useBackendStore } from "../stores/backend";

const backendStore = useBackendStore();

const columns = ref([]);

const props = defineProps({
  rows: Array,
});

columns.value = [
  {
    name: "implant_id",
    required: true,
    label: "Implant ID",
    align: "left",
    field: "implant_id",
    headerStyle: "font-weight: bold",
  },
  {
    name: "created_at",
    required: true,
    label: "Created At",
    align: "left",
    field: "created_at",
    sortable: true,
    headerStyle: "font-weight: bold",
  },
  {
    name: "external_ip_address",
    required: true,
    label: "Public IP",
    align: "left",
    field: "external_ip_address",
    headerStyle: "font-weight: bold",
  },
  {
    name: "internal_ip_address",
    required: true,
    label: "Internal IP",
    align: "left",
    field: "internal_ip_address",
    headerStyle: "font-weight: bold",
  },
  {
    name: "os_type",
    required: true,
    label: "OS",
    align: "left",
    field: "os_type",
    sortable: true,
    headerStyle: "font-weight: bold",
  },
  {
    name: "machine_user",
    required: true,
    label: "Machine user",
    align: "left",
    field: "machine_user",
    headerStyle: "font-weight: bold",
  },
  {
    name: "machine_name",
    required: true,
    label: "Machine name",
    align: "left",
    field: "machine_name",
    headerStyle: "font-weight: bold",
  },
  {
    name: "process_name",
    required: true,
    label: "Process",
    align: "left",
    field: "process_name",
    headerStyle: "font-weight: bold",
  },
  {
    name: "pid",
    required: true,
    label: "PID",
    align: "left",
    field: "pid",
    headerStyle: "font-weight: bold",
  },
  {
    name: "architecture",
    required: true,
    label: "Architecture",
    align: "left",
    field: "architecture",
    sortable: true,
    headerStyle: "font-weight: bold",
  },
];
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :rows="props.rows"
      :columns="columns"
      row-key="implant_id"
      no-data-label="There are no implants"
      :hide-pagination="true"
      :loading="backendStore.isTableLoading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
</template>
<style></style>
