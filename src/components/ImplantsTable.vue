<script setup>
import { ref } from "vue";

const columns = ref([]);
const rows = ref([]);

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
    name: "public_ip",
    required: true,
    label: "Public IP",
    align: "left",
    field: "public_ip",
    headerStyle: "font-weight: bold",
  },
  {
    name: "internal_ip",
    required: true,
    label: "Internal IP",
    align: "left",
    field: "internal_ip",
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

rows.value = [
  {
    implant_id: "1111-1111-1111-1111",
    created_at: "09-06-2022",
    public_ip: "217.98.14.51",
    internal_ip: "192.168.0.49",
    os_type: "Linux",
    machine_user: "alper",
    machine_name: "fedora",
    process_name: "dbus-broker",
    pid: 9991,
    architecture: "x86-64",
  },
  {
    implant_id: "1111-1111-1111-1111",
    created_at: "09-06-2022",
    public_ip: "217.98.14.51",
    internal_ip: "192.168.0.49",
    os_type: "Linux",
    machine_user: "alper",
    machine_name: "fedora",
    process_name: "dbus-broker",
    pid: 9991,
    architecture: "x86-64",
  },
];
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="implant_id"
      no-data-label="There are no implants"
      :hide-pagination="true"
    />
  </div>
</template>
<style></style>
