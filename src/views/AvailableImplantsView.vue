<script setup></script>
<template>
  <h3 id="implants">Available Implant Profiles</h3>
  <q-list bordered separator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-img src="../assets/linux-logo.png"></q-img>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-white text-bold">Linux HTTP</q-item-label>
        <q-item-label class="text-white" caption
          >Supported GUI: GNOME</q-item-label
        >
        <q-item-label class="text-white" caption>Author: @drseu55</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<style>
#implants {
  margin: auto;
  font-weight: bold;
  color: white;
  padding-bottom: 20px;
}
</style>
