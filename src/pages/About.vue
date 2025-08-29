<script setup>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
import History from '../partials/History.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

        <History />

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>