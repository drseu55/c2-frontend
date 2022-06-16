<script setup>
import ImplantsTable from "../components/ImplantsTable.vue";
import { useBackendStore } from "../stores/backend";

const backendStore = useBackendStore();
</script>

<template>
  <h3 id="implants">Implants</h3>
  <ImplantsTable :rows="backendStore.getImplants" />
</template>

<style>
#implants {
  margin: auto;
  font-weight: bold;
  color: white;
}
</style>
