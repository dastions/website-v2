<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-10">
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
            Our wall of love</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700 mb-8">Read and listen to what our customers are saying about Simple.</p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <a class="btn text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group"
                href="#0">
                <span class="relative inline-flex items-center">
                  Share Your Testimonial <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
