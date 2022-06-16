<script setup>
import { useBackendStore } from "../stores/backend";

const backendStore = useBackendStore();

function closeDialog() {
  backendStore.isActionsDialogVisible = false;
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
        <q-btn color="primary" icon="info" stack class="setWidth" rounded
          >Get info</q-btn
        >
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          color="primary"
          icon="photo_camera"
          stack
          class="setWidth"
          rounded
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
          >Take a screenshot
        </q-btn>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn color="primary" icon="keyboard" stack class="setWidth" rounded
          >Start keylogging</q-btn
        >
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn color="primary" class="setWidth" rounded>
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
    </q-card>
  </q-dialog>
</template>

<style>
.setWidth {
  width: 100%;
}
</style>
