<script setup>
import Footer from "../Footer.vue";
import Header from "../Header.vue";
import PageIllustration from "../PageIllustration.vue"
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

          <div class="flex justify-between pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Left content -->
            <div class="max-w-3xl">

              <article>
                <!-- Section header -->
                <header class="pb-8">
                  <div class="mb-6">
                    <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                      to="/blog"><span class="tracking-normal text-blue-300">&lt;-</span> Volver al Blog</router-link>
                  </div>
                  <h1 class="text-5xl font-bold mb-5">Software de Recogida de Datos
                  </h1>
                  <img src="../../images/data-collection.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div data-scrollspy-target id="takecontrol" class="text-sm text-gray-500">Albert Mauri Guiu · <span
                        class="text-gray-700">Ene 1,
                        2024</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <p>Conecta fácilmente tus equipos y empieza a tomar el control de tu planta de producción.</p>
                  <p>Software adaptable a tus necesidades, conectamos todos tus equipos.</p>
                  <ul>
                    <li>Informes Legales para Auditorías</li>
                    <li>Control de Peso Promedio en Continuo</li>
                    <li>Alertas de rendimiento</li>
                    <li>Adquisición de Datos</li>
                    <li>Resúmenes y Conclusiones</li>
                  </ul>

                  <h2 data-scrollspy-target id="application">Aplicación Web para el control de Producción de sus Planta
                  </h2>

                  <ul>
                    <li>Pesadoras en Continuo®</li>
                    <li>Pesadoras Estáticas®</li>
                    <li>Detector de Metales®</li>
                  </ul>

                  <h2 data-scrollspy-target id="functions">Funciones Principales</h2>

                  <ul>
                    <li><strong>Control de Producción en Tiempo Real</strong>.</li>
                    <li>Visualización desde el móvil.</li>
                    <li>Extracción de <strong>Informes</strong> a distancia.</li>
                  </ul>

                  <p>Controle la producción desde la oficina o incluso desde casa y olvidése de ir con el USB de un lado
                    a otro de su fábrica.</p>

                  <button
                    class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4"
                    href="#0">
                    <span class="relative inline-flex items-center">
                      Catálogo Online
                      <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                        -&gt;
                      </span>
                    </span>
                  </button>
                </div>
              </article>

            </div>

            <!-- Right sidebar -->
            <aside class="max-md:hidden w-60 shrink-0 ml-6">
              <div
                class="sticky top-24 p-5 border-l border-r [border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.5),transparent)1]">
                <div class="font-bold">En esta página</div>
                <ul class="text-sm space-y-2 mt-2">
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#takecontrol">Toma el control
                      de tu planta de producción</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#application">Aplicación
                      Web</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#functions">Funciones Principales</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>