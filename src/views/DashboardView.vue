<script setup>
import WorldMap from "../components/WorldMap.vue";
</script>
<template>
  <h3 id="dashboard">Dashboard</h3>
  <h4 id="implants">Active implants</h4>
  <WorldMap />
</template>
<style>
#dashboard {
  margin: auto;
  font-weight: bold;
}

#implants {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
</style>
