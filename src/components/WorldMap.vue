<script setup>
import { ref } from "vue";
import * as vNG from "v-network-graph";
import { useBackendStore } from "../stores/backend";

const backendStore = useBackendStore();

const configs = vNG.defineConfigs({
  view: {
    panEnabled: false,
    zoomEnabled: false,
    minZoomLevel: 0.5,
  },
  node: {
    selectable: false,
    normal: {
      radius: 10,
      color: "#8888ff",
      strokeWidth: 2,
      strokeColor: "#0000aa",
    },
    hover: {
      color: "#FF0000",
    },
    label: {
      fontSize: 12,
      color: "#000000",
    },
    draggable: false,
  },
});

const layers = {
  worldmap: "base",
};

const graph = ref();

const eventHandlers = {
  "node:click": ({ node }) => {
    console.log(`I am in click ${node}`);
  },
};

function onLoadImage() {
  graph.value?.fitToContents();
}
</script>
<template>
  <div class="map">
    <v-network-graph
      ref="graph"
      :nodes="backendStore.nodes"
      :layouts="backendStore.layouts"
      :configs="configs"
      :layers="layers"
      :event-handlers="eventHandlers"
    >
      <!-- Additional layer -->
      <template #worldmap>
        <image
          href="../assets/worldmap.svg"
          x="0"
          y="0"
          width="1000px"
          @load="onLoadImage"
        />
      </template>
    </v-network-graph>
  </div>
</template>

<style>
.map {
  height: 500px;
}
</style>
