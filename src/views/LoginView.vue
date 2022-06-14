<script setup>
import { ref } from "vue";

let email = ref("");
let password = ref("");
let isPwd = ref(true);

let inputRule = [(val) => val.length > 0 || "Please insert password"];
</script>

<template>
  <div class="column fixed-center">
    <div class="row justify-center items-center">
      <q-img
        src="../assets/rudiarius-logo.png"
        alt="image error"
        style="height: 200px; max-width: 200px"
      />
    </div>
    <div class="row">
      <q-card
        square
        dark
        class="q-pa-md q-ma-none no-shadow bg-grey-10"
        style="width: 320px"
      >
        <q-card-section class="q-mt-l q-mb-md">
          <p class="text-weight-bolder text-grey text-h5">
            Login to your account
          </p>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              :rules="inputRule"
              dark
              dense
              square
              filled
              v-model="email"
              type="text"
              label="Username"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input
              :rules="inputRule"
              dark
              dense
              square
              filled
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-6">
              <q-btn
                outline
                rounded
                size="md"
                color="red-4"
                class="full-width text-white"
                label="Sign In"
              />
            </div>
            <div class="col-6">
              <p class="text-no-wrap text-grey text-caption text-right">
                New user? <a href="">Register</a>
              </p>
            </div>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<style>
a {
  color: #34ebeb;
  text-decoration: none;
}
</style>
