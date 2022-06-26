<script setup>
import { ref } from "vue";
import { useBackendStore } from "../stores/backend";
import { useQuasar } from "quasar";

const $q = useQuasar();

const checkInTime = ref();

const backendStore = useBackendStore();

function closeCheckInDialog() {
  backendStore.isCheckInDialogVisible = false;
}

function executeTask(task) {
  let result = backendStore.addTask(task, checkInTime.value.toString());

  backendStore.isCheckInDialogVisible = false;

  if (result) {
    $q.notify({
      message: "Task send successfully. You can check status in tasks page.",
      color: "green",
      position: "top",
    });
  } else {
    $q.notify({
      message: "Something went wrong. Please try again later.",
      color: "red",
      position: "top",
    });
  }
}
</script>
<template>
  <q-dialog v-model="backendStore.isCheckInDialogVisible" persistent>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          @click="closeCheckInDialog"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model.number="checkInTime"
          type="number"
          autofocus
          label="Check in time"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          type="primary"
          flat
          label="Submit"
          v-close-popup
          @click="executeTask('change_check_in')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
