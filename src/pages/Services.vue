<script setup>
import Header from './../partials/Header.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
import ServiceTables from '../partials/ServiceTables.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <ServiceTables />
      <CtaAlternative heading="Comienza ya a trabajar con nosotros" buttonText="Solicitar Presupuesto"
        buttonLink="/contact" />

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>