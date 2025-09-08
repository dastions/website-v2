<script setup>
import KeyCollaborations from './KeyCollaborations.vue';
import PageIllustration from './PageIllustration.vue';
</script>

<template>
            <section class="relative">
                <PageIllustration />

                <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-26 pb-12 md:pb-20">
        
        <!-- Hero Section -->
        <div class="text-center pb-12">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Nuestra Historia Familiar
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuatro generaciones de innovación en el sector del pesaje industrial
          </p>
        </div>

        <!-- Family Timeline -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Trayectoria Familiar</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Generation 1 -->
            <div class="text-center">
              <div class="bg-gray-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="../images/team/antonio.jpeg" alt="Antonio Collado" class="rounded-full w-32 h-32 object-cover" />
              </div>
              <h3 class="text-xl font-bold mb-2">Primera Generación</h3>
              <p class="text-gray-600 mb-2">Antonio Collado González</p>
              <p class="text-sm text-gray-500">Inició en AVERY, empresa inglesa de pesaje industrial</p>
            </div>

            <!-- Generation 2 -->
            <div class="text-center">
              <div class="bg-gray-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="../images/team/bm.jpeg" alt="Básculas Mauri" class="rounded-full w-32 h-32 object-cover" />
              </div>
              <h3 class="text-xl font-bold mb-2">Básculas Mauri</h3>
              <p class="text-gray-600 mb-2">Segunda Generación</p>
              <p class="text-sm text-gray-500">Fundación de la empresa familiar con marcas reconocidas</p>
            </div>

            <!-- Generation 3 -->
            <div class="text-center">
              <div class="bg-gray-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="../images/team/german.jpeg" alt="German Mauri" class="rounded-full w-32 h-32 object-cover" />
              </div>
              <h3 class="text-xl font-bold mb-2">Consolidación</h3>
              <p class="text-gray-600 mb-2">German Mauri</p>
              <p class="text-sm text-gray-500">Expansión y diversificación de servicios</p>
            </div>

            <!-- Generation 4 -->
            <div class="text-center">
              <div class="bg-gray-100 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="../images/team/oriol.jpeg" alt="Dastions" class="rounded-full w-32 h-32 object-cover" />
              </div>
              <h3 class="text-xl font-bold mb-2">Tercera Generación</h3>
              <p class="text-gray-600 mb-2">Oriol Mauri</p>
              <p class="text-sm text-gray-500">Dastions - Innovación tecnológica e IA</p>
            </div>
                                        </div>
                                    </div>

        <!-- Key Milestones -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Hitos Importantes</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-4xl font-bold text-blue-600 mb-4">1924</div>
              <h3 class="text-xl font-bold mb-2">Inicio en el Sector</h3>
              <p class="text-gray-600">Antonio Collado inicia su carrera en AVERY, empresa líder en pesaje industrial</p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-4xl font-bold text-purple-600 mb-4">1987</div>
              <h3 class="text-xl font-bold mb-2">Fundación Básculas Mauri</h3>
              <p class="text-gray-600">Creación de la empresa familiar con colaboraciones con MOBBA, EPELSA, PIBERNAT y METTLER TOLEDO</p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-lg">
              <div class="text-4xl font-bold text-green-600 mb-4">2022</div>
              <h3 class="text-xl font-bold mb-2">Nacimiento de Dastions</h3>
              <p class="text-gray-600">Oriol Mauri lidera la cuarta generación con enfoque en IoT e innovación tecnológica</p>
            </div>
          </div>
        </div>

        <!-- Current Team -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Nuestro Equipo Actual</h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <img src="../images/team/oriol.jpeg" alt="Oriol Mauri" class="rounded-full w-48 h-48 mx-auto mb-4 object-cover" />
              <h3 class="text-xl font-bold mb-2">Oriol Mauri</h3>
              <p class="text-gray-600 mb-2">CEO & Fundador</p>
              <p class="text-sm text-gray-500">Cuarta generación liderando la transformación digital</p>
            </div>

            <div class="text-center">
              <img src="../images/team/albert.jpg" alt="Albert Mauri" class="rounded-full w-48 h-48 mx-auto mb-4 object-cover" />
              <h3 class="text-xl font-bold mb-2">Albert Mauri Guiu</h3>
              <p class="text-gray-600 mb-2">Director Técnico</p>
              <p class="text-sm text-gray-500">Experiencia en ingeniería y desarrollo de soluciones</p>
            </div>

            <div class="text-center">
              <img src="../images/team/german.jpeg" alt="German" class="rounded-full w-48 h-48 mx-auto mb-4 object-cover" />
              <h3 class="text-xl font-bold mb-2">German</h3>
              <p class="text-gray-600 mb-2">Especialista en Pesaje</p>
              <p class="text-sm text-gray-500">Relaciones Internacionales y partners tecnológicos</p>
            </div>
          </div>
        </div>

        <!-- Key Collaborations -->
        <!-- Key Collaborations component -->
        <!-- <KeyCollaborations /> -->

        <!-- Vision Statement -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 class="text-3xl font-bold mb-4">Nuestra Visión</h2>
          <p class="text-xl mb-6">
            "Impulsar la evolución del pesaje hacia la era digital mediante soluciones de software innovadoras e integradoras.
              Socio estratégico aportando valor a fabricantes e instaladores, liderando la digitalización del 
              pesaje."
          </p>
          <div class="flex justify-center gap-4 text-sm">
            <span class="bg-white/20 px-4 py-2 rounded-full">40+ años de experiencia</span>
            <span class="bg-white/20 px-4 py-2 rounded-full">4 generaciones</span>
            <span class="bg-white/20 px-4 py-2 rounded-full">Innovación continua</span>
                            </div>
                    </div>

                </div>
    </div>
  </section>
</template>