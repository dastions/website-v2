<script setup>
import Header from './../partials/Header.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
import ServiceTables from '../partials/ServiceTables.vue'
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

            <!-- Key Collaborations -->
            <div class="mb-16">
              <h2 class="text-3xl font-bold text-center mb-12">Colaboraciones Estratégicas</h2>
              
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- UPC Collaboration -->
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                  <div class="text-4xl mb-4">🎓</div>
                  <h3 class="text-xl font-bold mb-3">UPC</h3>
                  <p class="text-gray-600 mb-4">Universitat Politècnica de Catalunya</p>
                  <div class="text-sm text-gray-500">
                    <p class="mb-2">• Departamento de Ingeniería Electrónica</p>
                    <p class="mb-2">• Dr. Vicenç Parisi Baradad</p>
                    <p>• Grupo de investigación SARTI</p>
                  </div>
                </div>

                <!-- Applus+ Collaboration -->
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
                  <div class="text-4xl mb-4">🔬</div>
                  <h3 class="text-xl font-bold mb-3">Applus+</h3>
                  <p class="text-gray-600 mb-4">Certificación y Validación</p>
                  <div class="text-sm text-gray-500">
                    <p class="mb-2">• David Cabré Canela</p>
                    <p class="mb-2">• Calidad y eficiencia</p>
                    <p>• Procesos de certificación</p>
                  </div>
                </div>

                <!-- Technology Partners -->
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
                  <div class="text-4xl mb-4">🤖</div>
                  <h3 class="text-xl font-bold mb-3">Partners Tecnológicos</h3>
                  <p class="text-gray-600 mb-4">Tecnologías de Vanguardia</p>
                  <div class="text-sm text-gray-500">
                    <p class="mb-2">• Minebea Intec</p>
                    <p class="mb-2">• Dini Argeo</p>
                    <p>• Rice Lake</p>
                  </div>
                </div>
              </div>

              <!-- Additional Collaborations -->
              <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg">
                <h3 class="text-2xl font-bold text-center mb-6">Integración con Sistemas ERP</h3>
                <div class="grid md:grid-cols-3 gap-6 text-center">
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-2">💼</div>
                    <h4 class="font-bold">SAP</h4>
                  </div>
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-2">📊</div>
                    <h4 class="font-bold">NAVISION</h4>
                  </div>
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <div class="text-2xl mb-2">🗄️</div>
                    <h4 class="font-bold">ORACLE</h4>
                  </div>
                </div>
              </div>
            </div>

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