<script setup></script>
<template>
  <h3 id="implants">Available Tasks</h3>
  <q-list bordered separator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="info" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold">GET INFO</q-item-label>
        <q-item-label class="text-white" caption
          >Supported OS: Linux</q-item-label
        >
        <q-item-label class="text-white" caption
          >Description: Gets information from target about his external and
          internal IP address, OS type, current logged username of the system,
          system name, running process name, PID and architecture</q-item-label
        >
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="photo_camera" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold">TAKE A PICTURE</q-item-label>
        <q-item-label class="text-white" caption
          >Supported OS: Linux, Windows, Mac</q-item-label
        >
        <q-item-label class="text-white" caption
          >Description: Tries to attach to the web camera and to take a
          picture</q-item-label
        >
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="screenshot_monitor" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold"
          >TAKE A SCREENSHOT</q-item-label
        >
        <q-item-label class="text-white" caption
          >Supported GUI: Linux GNOME</q-item-label
        >
        <q-item-label class="text-white" caption
          >Description: Tries to take a screenshot from the current screen
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-img src="../assets/terminal-logo.png"></q-img>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold">SEND COMMANDS</q-item-label>
        <q-item-label class="text-white" caption
          >Supported OS: Linux</q-item-label
        >
        <q-item-label class="text-white" caption
          >Description: Sends commands to the infected machine and waits for the
          response
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold"
          >CHANGE CHECK IN TIME</q-item-label
        >
        <q-item-label class="text-white" caption
          >Supported OS: Not OS related</q-item-label
        >
        <q-item-label class="text-white" caption
          >Default: 60 seconds</q-item-label
        >
        <q-item-label class="text-white" caption
          >Description: Changes implant's response time
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<style>
#tasks {
  margin: auto;
  font-weight: bold;
  color: white;
  padding-bottom: 20px;
}
</style>
