<script setup>
import Header from './../partials/Header.vue'
import HeroHome from './../partials/HeroHome.vue'
import BusinessCategories from '../partials/BusinessCategories.vue'
/* import LargeTestimonial from '../partials/LargeTestimonial.vue' */
import FeaturesPlanet from './../partials/FeaturesPlanet.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import Footer from './../partials/Footer.vue'
import CtaAlternative from '../partials/CtaAlternative.vue'
</script>


<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroHome />
      <!-- <BusinessCategories /> -->
      <!-- <LargeTestimonial /> -->
      <FeaturesPlanet />
      <FeaturesHome />
      <TestimonialsCarousel data-scrollspy-target id="contact-form" />
      <CtaAlternative heading="Comienza ya a trabajar con nosotros" buttonText="Solicitar Presupuesto"
        buttonLink="/contact" />
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>
