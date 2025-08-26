<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-26 pb-12 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">

          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
            data-aos="zoom-y-out" data-aos-delay="150">Digital Application <br class="max-lg:hidden" />Solutions</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Consultoría de Software con
              soluciones para su empresa.
              Desarrollamos software personalizado, con un resultado profesional adaptado a tus necesidades.
            </p>
            <div
              class="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div class="relative max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                data-aos-delay="450">
                <a class="btn text-gray-800 bg-white hover:bg-gray-50 shadow-sm w-full sm:w-auto" href="/products">
                  Nuestros Productos
                </a>
                
                <a data-scrollspy-link href="#contact-form" class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4">
                  <span class="relative inline-flex items-center">
                    Contáctanos
                    <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Hero image -->
        <div class="max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="600">
          <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/KLKXPXEdsbk?autoplay=1&mute=1&rel=0&modestbranding=1&start=7"
              title="YouTube video player" 
              frameborder="0"
              allowfullscreen></iframe>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
