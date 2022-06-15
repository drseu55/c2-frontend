<script setup>
import { ref } from "vue";
import * as vNG from "v-network-graph";

const nodes = {
  node1: {},
  node2: {},
  node3: {},
};

const layouts = {
  nodes: {
    node1: { x: 566, y: 110.5 },
    node2: { x: 482.32500000000005, y: 71.75 },
    node3: { x: 802, y: 243 },
  },
};

const configs = vNG.defineConfigs({
  view: {
    panEnabled: false,
    zoomEnabled: false,
    minZoomLevel: 0.5,
  },
  node: {
    selectable: true,
    normal: {
      radius: 10,
      color: "#8888ff",
      strokeWidth: 2,
      strokeColor: "#0000aa",
    },
    hover: {
      color: "#6666ff",
    },
    label: {
      fontSize: 12,
      color: "#000000",
    },
    draggable: false,
  },
});

// additional layers definition
const layers = {
  // {layername}: {position}
  worldmap: "base",
};

// ref="graph"
const graph = ref();

function onLoadImage() {
  graph.value?.fitToContents();
}
</script>
<template>
  <div class="map">
    <v-network-graph
      ref="graph"
      :nodes="nodes"
      :layouts="layouts"
      :configs="configs"
      :layers="layers"
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
