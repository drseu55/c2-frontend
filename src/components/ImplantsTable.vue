<script setup>
import { ref } from "vue";
import { useBackendStore } from "../stores/backend";
import ActionsDialog from "../components/ActionsDialog.vue";

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
  {
    name: "last_check_in",
    required: true,
    label: "Last Check In",
    align: "left",
    field: "last_check_in",
    headerStyle: "font-weight: bold",
  },
  {
    name: "actions",
    required: true,
    label: "Actions",
    align: "left",
    field: "actions",
    headerStyle: "font-weight: bold",
  },
];

function openActionsDialog(rowInfo) {
  backendStore.implantsTableClickedRow = rowInfo.row;
  if (rowInfo.row.machine_user !== null) {
    backendStore.actionDialogBarInfo = `${backendStore.implantsTableClickedRow.machine_user}@${backendStore.implantsTableClickedRow.machine_name}(${backendStore.implantsTableClickedRow.pid})`;
  } else {
    backendStore.actionDialogBarInfo = "";
  }
  backendStore.isActionsDialogVisible = true;
}
</script>
<template>
  <ActionsDialog />
  <div class="q-pa-md">
    <q-table
      :rows="props.rows"
      :columns="columns"
      row-key="implant_id"
      no-data-label="There are no implants"
      :hide-pagination="false"
      :loading="backendStore.isImplantsTableLoading"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="call_to_action"
            @click="openActionsDialog(props)"
          ></q-btn>
        </q-td>
      </template>

      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
</template>
<style></style>
