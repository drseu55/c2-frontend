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
    name: "value",
    required: true,
    label: "Value",
    align: "left",
    field: "value",
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
  {
    name: "check_result",
    required: true,
    label: "Check result",
    align: "left",
    field: "check_result",
    headerStyle: "font-weight: bold",
  },
];

async function getResult(row) {
  backendStore.tasksTableClickedRow = row;

  await backendStore.fetchPlainResult(row.task_id);

  backendStore.isResultDialogVisible = true;
}
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :rows="props.rows"
      :columns="columns"
      row-key="task_id"
      no-data-label="There are no tasks"
      :hide-pagination="false"
      :loading="backendStore.isTasksTableLoading"
    >
      <template v-slot:body-cell-check_result="props">
        <q-td :props="props">
          <q-btn
            v-if="props.row.task_status === 'completed'"
            @click="getResult(props.row)"
            icon="visibility"
          >
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
