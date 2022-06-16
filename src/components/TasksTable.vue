<script setup>
import { ref } from "vue";
const columns = ref([]);

const props = defineProps({
  rows: Array,
});

columns.value = [
  {
    name: "task_id",
    required: true,
    label: "Task ID",
    align: "left",
    field: "task_id",
    headerStyle: "font-weight: bold",
  },
  {
    name: "task",
    required: true,
    label: "Task",
    align: "left",
    field: "task",
    sortable: true,
    headerStyle: "font-weight: bold",
  },
  {
    name: "task_created_at",
    required: true,
    label: "Created at",
    align: "left",
    field: "task_created_at",
    sortable: true,
    headerStyle: "font-weight: bold",
  },
  {
    name: "task_status",
    required: true,
    label: "Status",
    align: "left",
    field: "task_status",
    headerStyle: "font-weight: bold",
  },
  {
    name: "implant_id",
    required: true,
    label: "Implant ID",
    align: "left",
    field: "implant_id",
    headerStyle: "font-weight: bold",
  },
];
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :rows="props.rows"
      :columns="columns"
      row-key="task_id"
      no-data-label="There are no tasks"
      :hide-pagination="true"
    >
    </q-table>
  </div>
</template>
