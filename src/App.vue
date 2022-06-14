<script setup>
import { onMounted, ref } from "vue";
import { useBackendStore } from "./stores/backend";
import LogoutDialog from "./components/LogoutDialog.vue";
import { RouterLink, RouterView } from "vue-router";
import { useQuasar } from "quasar";

const backendStore = useBackendStore();

const $q = useQuasar();
defineExpose({
  $q,
});

let drawer = ref(false);
let miniState = ref(true);

onMounted(() => {
  let jwt = localStorage.getItem("JWT");

  if (jwt !== null) {
    backendStore.isAuthenticated = true;
  }
});
</script>

<template>
  <div>
    <LogoutDialog />
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh; overflow: auto"
      class="shadow-2"
    >
      <q-header elevated class="bg-blue">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-img
            src="./assets/rudiarius-logo.png"
            alt="image error"
            style="height: 50px; max-width: 50px"
          />
          <q-toolbar-title>Rudiarius</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item :to="{ name: 'Dashboard' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-item :to="{ name: 'Implants' }" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="bug_report" />
              </q-item-section>

              <q-item-section> Implants </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="task_alt" />
              </q-item-section>

              <q-item-section> Tasks </q-item-section>
            </q-item>

            <q-item
              @click="backendStore.isLogoutVisible = true"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section> Logout </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <RouterView />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
body {
  height: 100%;
  background-image: radial-gradient(
    ellipse at center,
    rgba(181, 189, 200, 0) 0%,
    rgba(130, 140, 149, 0) 50%,
    rgba(40, 52, 59, 1) 100%
  );
  background-repeat: no-repeat, repeat;
  background-size: 100% 100%, 30px 30px;
  /* margin: 0px !important;
  padding: 0px !important; */
}

/* html {
  margin: 0px !important;
  padding: 0px !important;
} */
</style>
