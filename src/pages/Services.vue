<script setup>
import Header from './../partials/Header.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
import ServiceTables from '../partials/ServiceTables.vue'
import KeyCollaborations from '../partials/KeyCollaborations.vue'
import PageIllustration from '../partials/PageIllustration.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <section class="relative">
        <PageIllustration />

        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-26 pb-12 md:pb-20">
            
            <!-- ServiceTables component -->
            <ServiceTables />

            <!-- Key Collaborations component -->
            <KeyCollaborations />

          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <CtaAlternative heading="Comienza ya a trabajar con nosotros" buttonText="Solicitar Presupuesto"
        button-link="/contact" />

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>