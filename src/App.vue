<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterView />
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
}
</style>
