<script setup>
import { onMounted } from "vue";
import TasksTable from "../components/TasksTable.vue";
import { useBackendStore } from "../stores/backend";
import ResultDialog from "../components/ResultDialog.vue";

const backendStore = useBackendStore();

onMounted(() => {
  setInterval(async () => {
    await backendStore.fetchTasks();
  }, 5000);
});
</script>
<template>
  <ResultDialog />
  <h3 id="tasks">Tasks</h3>
  <TasksTable :rows="backendStore.getTasks" />
</template>
<style>
#tasks {
  margin: auto;
  font-weight: bold;
  color: white;
}
</style>
