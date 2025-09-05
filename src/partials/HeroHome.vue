<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Video Background -->
    <div class="absolute inset-0 w-full h-full">
      <iframe 
        class="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/KLKXPXEdsbk?autoplay=1&mute=1&rel=0&modestbranding=1&start=7&controls=0&showinfo=0&loop=1&playlist=KLKXPXEdsbk"
        title="Background Video" 
        frameborder="0"
        allowfullscreen
        allow="autoplay; encrypted-media">
      </iframe>
      
      <!-- Video Overlay for better text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- Hero content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

      <!-- Section header -->
      <div class="pb-12 md:pb-16">

        <h1
          class="text-5xl md:text-6xl font-bold mb-6 text-white border-y border-white/30"
          data-aos="zoom-y-out" data-aos-delay="150">Digital Application <br class="max-lg:hidden" />Solutions</h1>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-white/90 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Consultoría de Software con
            soluciones para su empresa.
            Desarrollamos software personalizado, con un resultado profesional adaptado a tus necesidades.
          </p>
          <div
            class="relative before:absolute before:inset-0 before:border-y before:border-white/30">
            <div class="relative max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
              data-aos-delay="450">
              <router-link class="btn text-gray-800 bg-white hover:bg-gray-50 shadow-sm w-full sm:w-auto" to="/products">
                Nuestros Productos
              </router-link>
              
              <router-link to="/contact" class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4">
                <span class="relative inline-flex items-center">
                  Contáctanos
                  <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                    -&gt;
                  </span>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
