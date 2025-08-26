<script setup>
import { ref } from 'vue'
import PageIllustration from "./PageIllustration.vue"

const isAnnual = ref(true)
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
            Productos que se adaptan a tus necesidades</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700">Soluciones flexibles y confiables diseñadas para impulsar el crecimiento de tu negocio.</p>
          </div>
        </div>

        <!-- Products tables -->
        <div>

          <div
            class="max-w-sm md:max-w-2xl xl:max-w-none mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 items-start">

            <!-- Products table 1 -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

              <div class="mb-4">
                <div class="font-bold text-center text-blue-500 text-lg mb-2">
                  Data Collection
                </div>
                <div
                  class="font-medium text-center text-gray-600 items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  Producción
                </div>
                <div class="grow text-sm text-gray-700">Empieza a tomar el control de
                  tu planta de producción.
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Más de 100GB Disk Space</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Gestión de Alertas</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Análisis de Datos</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Informes de Producción</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Control de Cálidad</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soporte técnico incluido</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">Sitio Web</a>
              </div>
            </div>

            <!-- Products table 2 -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

              <div class="mb-4">
                <div class="font-bold text-center text-blue-500 text-lg mb-2">
                  Truck & Scales
                </div>
                <div
                  class="font-medium text-center text-gray-600 items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  Logística
                </div>
                <div class="grow text-sm text-gray-700">
                  Digitaliza el futuro de la logística y el transporte.
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Plataforma de Documentación Online</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Pesaje Automático</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Accesos / Expediciones / Logística</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Backup</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Más de 2.000 Transacciones / día</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soporte técnico incluido</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">Sitio Web</a>
              </div>
            </div>

            <!-- Products table 3 -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

              <div class="mb-4">
                <div class="font-bold text-center text-blue-500 text-lg mb-2">
                  Seguridad
                </div>
                <div
                  class="font-medium text-center text-gray-600 items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  Informática
                </div>
                <div class="grow text-sm text-gray-700">
                  Soluciones de seguridad adaptadas a tus proyectos.
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consultoría de Seguridad</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>P.E.M. Testing</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Estudio de Vulnerabilidades</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Seguridad de Protocolos</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soporte técnico incluido</span>
                </li>

              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">Contactar</a>
              </div>
            </div>

            <!-- Products table 4 -->
            <div
              class="relative flex flex-col h-full p-5 rounded-2xl backdrop-blur-xs bg-white/70 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

              <div class="mb-4">
                <div class="font-bold text-center text-blue-500 text-lg mb-2">
                  PLC 4.0
                </div>
                <div
                  class="font-medium text-center text-gray-600 items-baseline pb-4 mb-4 border-b border-gray-200 border-dashed">
                  Automatización
                </div>
                <div class="grow text-sm text-gray-700">Soluciones digitales que transforman tu negocio.
                </div>
              </div>
              <ul class="text-sm text-gray-500 space-y-2 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consultoría de Software a medida</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>App Multiplataforma</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>CI & CD con Unit Test</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Modern frameworks</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Actualizaciones continuas</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-2 shrink-0" viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Soporte técnico incluido</span>
                </li>
              </ul>
              <div class="mt-6">
                <a class="btn-sm py-1.5 rounded-lg text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full"
                  href="#0">Contactar</a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
