<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-26 md:pb-20">

        <!-- Section header -->
        <div class="pb-16">
          <h1 class="text-5xl font-bold mb-4">Dastions News</h1>
          <p class="text-lg text-gray-700">Contenido para desarrolladores, productos y expertos digitales.</p>
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button class="btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm">All</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">Interviews</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">Inspiration</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">Updates</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">Product</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm">Miscellaneous</button>
        </div>

        <!-- Articles -->
        <div
          class="space-y-10 border-l [border-image:linear-gradient(to_bottom,var(--color-slate-200),var(--color-slate-300),transparent)1]">
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/detectores-de-rayos-x-alimentarios">Comprar Rayos X</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              ¿Qué debo tener en cuenta a la hora de comprar un detector de Rayos X? Al considerar la compra de un
              detector de rayos X para tu fábrica, es importante tener en cuenta varios factores para asegurarte de que
              el equipo seleccionado satisfaga las necesidades específicas de tu negocio.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/detectores-de-rayos-x-alimentarios">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/detector-rayos-x">Detectores de Rayos X Alimentarios</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              ¿Por qué debo instalar un detector de rayos X en mi fábrica? Instalar un detector de rayos X en tu fábrica
              puede ofrecer una serie de ventajas significativas, especialmente en la industria alimentaria, donde la
              seguridad y la calidad son de suma importancia.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/detector-rayos-x">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/data-collection">Software de Recogida de Datos</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              Catálogo Online Conecta fácilmente tus equipos y empieza a tomar el control de tu planta de producción.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/data-collection">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/sector-portuario">Sector Portuario</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              Software de Control de Pesaje en el Sector Portuario, con Identificación de Matrículas y Expedicion de
              Documentos.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/sector-portuario">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/access-control">Control de Accesos</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              Software de Control de Accesos, con Cámaras de Léctura de Matrículas y Terminales de Pago y Ticketing.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/access-control">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/albert.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Albert Mauri Guiu</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog/pesaje-automatico">Sistema de Pesaje Automático</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              Sistemas funcionando con más de 1.500 camiones / día. Optimice su Operación de Pesaje con Nuestro Software
              de Automatización: Conexión Digital y Sincronización con ERP SAP.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog/pesaje-automatico">Leer más <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
        </div>

        <!-- Load more -->
        <div class="text-center mt-12">
          <button class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]">Cargar más
            <span class="tracking-normal text-gray-500 ml-2">↓</span></button>
        </div>

      </div>

    </div>
  </section>
</template>