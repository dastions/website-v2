<script setup>
import HashLink from "../../components/HashLink.vue";
import Footer from "../Footer.vue";
import Header from "../Header.vue";
import PageIllustration from "../PageIllustration.vue"
const props = defineProps(['post_date'])
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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="agent-ai">DASTIONS Industrial
                    Agent AI para Básculas de Camiones</h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">{{ post_date
                        }}</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <img src="../../images/truckandscales3d.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <p>
                    En <strong>DASTIÓNS</strong> hemos desarrollado una herramienta única que revoluciona la
                    gestión de básculas de camiones en entornos logísticos e industriales.
                  </p>

                  <h2 data-scrollspy-target id="characteristics">Características principales</h2>

                  <p>
                    Nuestro Industrial <strong>Agent AI</strong>
                    conecta varias básculas en red,
                    independientemente de su
                    ubicación, y asiste a los choferes
                    mediante voz a través de
                    interfonos adaptados. Esto
                    permite:
                  </p>

                  <ul>
                    <li><strong>Interacción directa:</strong> los
                      conductores pueden realizar
                      preguntas al asistente virtual,
                      recibir instrucciones de carga o
                      descarga, y obtener respuestas inmediatas.
                    </li>
                    <li><strong>Gestión integrada:</strong> el sistema se conecta mediante API’s con el ERP del
                      cliente, permitiendo consultas automáticas, toma de decisiones y generación
                      de conclusiones útiles para la gestión.
                    </li>
                    <li><strong>Control operativo:</strong> interactúa con elementos de campo (barreras, puertas
                      de almacén, operadores logísticos), asegurando un flujo continuo y seguro.
                    </li>
                  </ul>

                  <h2 data-scrollspy-target id="advantages">Ventajas principales</h2>

                  <ul>
                    <li>Reducción de personal dedicado exclusivamente a la gestión en básculas.</li>
                    <li>Optimización del tiempo de espera y coordinación de cargas y descargas.</li>
                    <li>Mayor trazabilidad y control, con disponibilidad 24/7.</li>
                    <li>Escalabilidad: desde una planta hasta redes internacionales de básculas.</li>
                  </ul>

                  <h2 data-scrollspy-target id="benefits">¿Qué beneficios aportan los datos medidos?</h2>

                  <p>
                    Si se integra el módulo opcional de visión, el sistema añade reconocimiento
                    automático de matrículas y control de desperfectos en contenedores, lo que
                    lo convierte en la herramienta ideal para puertos, cerealistas, químicas y
                    petroquímicas, donde los flujos de camiones y graneles son intensivos.
                  </p>

                  <p>
                    <strong>DASTIONS Industrial Agent AI:</strong> la solución que transforma la gestión de
                    básculas de camiones, optimizando recursos, tiempo y seguridad.
                  </p>

                  <h2 data-scrollspy-target id="tech-base">Base tecnológica</h2>

                  <p>
                    La base tecnológica de Industrial Agent AI se sustenta en Pinecall.io, líder en
                    el desarrollo de agentes de voz e IA multicanal. Gracias a esta plataforma, el
                    sistema cuenta con la solidez y escalabilidad necesarias para operar en
                    entornos logísticos de alta exigencia. Más información en: <a href="https://pinecall.io"
                      target="_blank" class="hover:underline">pinecall.io</a>
                  </p>
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
                    <HashLink :to="{ hash: '#agent-ai' }" class="text-gray-700 hover:text-gray-900">DASTIONS Industrial
                      Agent AI</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#characteristics' }" class="text-gray-700 hover:text-gray-900">
                      Características
                      principales</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#advantages' }" class="text-gray-700 hover:text-gray-900">Ventajas
                      principales</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#benefits' }" class="text-gray-700 hover:text-gray-900">¿Qué beneficios
                      aportan los datos medidos?</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#tech-base' }" class="text-gray-700 hover:text-gray-900">Base
                      tecnológica</HashLink>
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