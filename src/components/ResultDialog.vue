<script setup>
import { useBackendStore } from "../stores/backend";

const backendStore = useBackendStore();

function closeResultDialog() {
  backendStore.isResultDialogVisible = false;
}
</script>
<template>
  <q-dialog v-model="backendStore.isResultDialogVisible">
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

      <q-card-section>
        <span style="white-space: pre">
          {{
            String.fromCharCode(
              ...backendStore.plainResult.plain_result_content
            )
          }}
        </span>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
