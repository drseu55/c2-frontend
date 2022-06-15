<script setup>
import WorldMap from "../components/WorldMap.vue";
</script>
<template>
  <h3 id="dashboard">Dashboard</h3>
  <h4 id="active_implants">Active implants</h4>
  <WorldMap />
</template>
<style>
#dashboard {
  margin: auto;
  font-weight: bold;
  color: white;
}

#active_implants {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: white;
}
</style>
