<script setup>
import { useBackendStore } from "../stores/backend";
import { computed } from "@vue/reactivity";

const backendStore = useBackendStore();
const IMAGE_URL = "http://127.0.0.1:8080/assets/";

function closeResultDialog() {
  backendStore.isResultDialogVisible = false;
}

const condition = computed(() => {
  return (
    backendStore.tasksTableClickedRow.task !== "take_picture" &&
    backendStore.tasksTableClickedRow.task !== "take_screenshot"
  );
});
</script>
<template>
  <q-dialog v-model="backendStore.isResultDialogVisible" persistent>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          Result for {{ backendStore.tasksTableClickedRow.task_id }}
        </div>
        <q-space />
        <q-btn
          @click="closeResultDialog"
          icon="close"
          flat
          round
          dense
          v-close-popup
        />
      </q-card-section>

      <q-card-section v-if="condition">
        <span style="white-space: pre">
          {{
            String.fromCharCode(
              ...backendStore.plainResult.plain_result_content
            )
          }}
        </span>
      </q-card-section>

      <q-card-section class="column items-center" v-if="!condition">
        <q-img
          :src="`${IMAGE_URL}${backendStore.plainResult.image_url}`"
          style="height: 200px; max-width: 200px"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
