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
        <div class="text-center pb-12">
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
            Servicios especializados para tu negocio</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-md text-gray-700">Soluciones flexibles y confiables diseñadas para impulsar el crecimiento de
              tu negocio.</p>
          </div>
        </div>

        <!-- Services tables -->
        <div>
          <div class="grid grid-cols-3 grid-rows-2 gap-4 text-center">
            <!-- Services table 1 -->
            <div class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6">
              <!-- SVG -->
              <div class="service-icon text-center">
                <i class="ti-world orange-icon text-5xl"></i>
              </div>
              <!-- Title -->
              <h3 class="text-xl font-bold mb-1">Software a Medida</h3>
              <!-- Subtitle -->
              <p class="text-md text-gray-600">Consultoría y análisis de Seguridad en las empresas.</p>
            </div>

            <!-- Services table 2 -->
            <div
              class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6 col-start-3 row-start-2">
              <div class="service-icon text-center">
                <i class="ti-pulse orange-icon text-5xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-1">Redes</h3>
              <p class="text-md text-gray-600">Telecomunicaciones y Segurirdad. Conectividad de dispositivos IoT y OT</p>
            </div>

            <!-- Services table 3 -->
            <div
              class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6 col-start-2 row-start-1">
              <div class="service-icon text-center">
                <i class="ti-lock orange-icon text-5xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-1">Ciberseguridad</h3>
              <p class="text-md text-gray-600">Consultoría y análisis de Seguridad en las empresas.</p>
            </div>

            <!-- Services table 4 -->
            <div
              class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6 col-start-3 row-start-1">
              <div class="service-icon text-center">
                <i class="ti-blackboard orange-icon text-5xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-1">Ingeniería</h3>
              <p class="text-md text-gray-600">Equipo de ingenieros industriales. Soluciones mecánicas en campo.</p>
            </div>

            <!-- Services table 5 -->
            <div
              class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6 col-start-1 row-start-2">
              <div class="service-icon text-center">
                <i class="ti-palette orange-icon text-5xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-1">Diseño</h3>
              <p class="text-md text-gray-600">Diseñamos el producto final destinado la mejor solución a su consulta.</p>
            </div>

            <!-- Services table 6 -->
            <div
              class="flex flex-col items-center justify-center bg-blue-50 border border-blue-300 rounded p-6 col-start-2 row-start-2">

              <div class="service-icon text-center">
                <i class="ti-package orange-icon text-5xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-1">Inteligencia Artificial</h3>
              <p class="text-md text-gray-600">Gestiona procesos industriales por IA y optimiza puestos de trabajos con nestro Agente Virtual.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
