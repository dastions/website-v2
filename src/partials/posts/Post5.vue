<script setup>
import HashLink from "../../components/HashLink.vue";
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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="consider">Control de Accesos</h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">Dic 12,
                        2023</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <img src="../../images/parking.png" class="img-fluid" alt="Camion Báscula" style="margin: 20px">
                  <p>
                    Software de Control de Accesos, con Cámaras de Léctura de Matrículas y Terminales de Pago y
                    Ticketing.
                  </p>

                  <h2 data-scrollspy-target id="functions">Funciones Principales Parking</h2>

                  <ul>
                    <li><strong>Lectura de Matrículas</strong> por OCR Automática</li>
                    <li>Tarjetas Identificativas de Personal</li>
                    <li>Terminal de <strong>Pago NFC</strong> - ContactLess</li>
                  </ul>

                  <img src="../../images/control-de-accesos.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">

                  <h2 data-scrollspy-target id="parking">Parking App</h2>

                  <ul>
                    <li>Listados de <strong>Matrículas Autorizadas</strong>.</li>
                    <li>Diferenciación entre Zonas y Accesos.</li>
                    <li>Control de <strong>Barreras</strong>, Semáforos, Inductivos, &hellip;</li>
                    <li><strong>Control manual</strong> sobre los elementos de campo desde App.</li>
                  </ul>

                  <h2 data-scrollspy-target id="version">Versión Cloud o Versión Local</h2>

                  <img src="../../images/cloud-local.png" class="img-fluid" alt="Camion Báscula" style="margin: 20px">

                  <ul>
                    <li><strong>Control de Acceso</strong>.</li>
                    <li>Visualización desde el móvil.</li>
                    <li>Extracción de <strong>Informes</strong> y <strong>Listados</strong>.</li>
                  </ul>

                  <p>Controle las entradas y salidas desde su oficina o incluso desde casa.</p>

                  <img src="../../images/camaras.png" class="img-fluid" alt="Camion Báscula" style="margin: 20px">

                  <p>Podemos Automatizar tu instalación actual sin modificar sus equipos!</p>

                  <p><em>Expedicion de Documentos Transporte y Logística</em> <a href="https://www.truckandscales.com"
                      target="_blank" class="hover:underline">Para empresas</a>.</p>

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
                    <HashLink :to="{ hash: '#functions' }" class="text-gray-700 hover:text-gray-900">Funciones
                      Principales Parking</HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#parking' }" class="text-gray-700 hover:text-gray-900">Parking App</HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#version' }" class="text-gray-700 hover:text-gray-900">Versión Cloud o Versión Local</HashLink>
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