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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="system">Sistema de Pesaje Automático
                  </h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">Dic 11,
                        2023</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">

                  <img src="../../images/truckandscales3d.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">

                  <p><strong>Sistemas funcionando con más de 1.500 camiones / día.</strong></p>

                  <p>Optimice su Operación de Pesaje con Nuestro Software de Automatización: Conexión Digital y
                    Sincronización con <strong>ERP SAP</strong>.</p>
                  <p>En un mundo empresarial cada vez más digitalizado, la eficiencia operativa es clave para el éxito
                    de su organización. La gestión precisa y rápida del pesaje de camiones es fundamental en industrias
                    como la logística y la manufactura. Presentamos nuestro innovador software de automatización de
                    pesaje, diseñado para transformar por completo su proceso de pesaje con funciones avanzadas y una
                    integración perfecta con el sistema ERP SAP.</p>

                  <img src="../../images/diagrama-pesaje-automatico.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">

                  <h2 data-scrollspy-target id="characteristics">Características Destacadas:</h2>

                  <ol>
                    <li>
                      <p><strong>Conexión Digital Integral:</strong>
                        Experimente la transición a la era digital con nuestra solución de pesaje completamente
                        digitalizada. Elimine los procesos manuales propensos a errores y mejore la precisión mediante
                        la conexión directa con sus sistemas de pesaje y balanzas electrónicas. Reduzca los tiempos de
                        espera y optimice la cadena de suministro.</p>
                    </li>
                    <li>
                      <p><strong>Impresión Automática:</strong>
                        Olvide las preocupaciones sobre impresiones incorrectas o retrasos en la generación de
                        documentos. Nuestro software garantiza la impresión automática de tickets y registros de pesaje
                        con información detallada y precisa. Esto no solo agiliza el proceso, sino que también mejora la
                        trazabilidad y la documentación.</p>
                    </li>
                    <li>
                      <p><strong>Integración sin Esfuerzo con ERP SAP:</strong>
                        La compatibilidad con el sistema ERP SAP es esencial en entornos empresariales modernos. Nuestro
                        software se integra sin complicaciones con SAP, permitiendo una sincronización fluida de datos
                        de pesaje. Obtenga información en tiempo real y optimice la toma de decisiones basada en datos
                        precisos y actualizados.</p>
                    </li>
                    <li>
                      <p><strong>Informes Analíticos Avanzados:</strong>
                        Acceda a informes detallados y analíticas avanzadas para tomar decisiones informadas. Nuestro
                        software proporciona visualizaciones gráficas, estadísticas y tendencias que le permitirán
                        identificar oportunidades de mejora, reducir costos y optimizar su operación de pesaje.</p>
                    </li>
                    <li>
                      <p><strong>Seguridad y Conformidad:</strong>
                        Cumpla con los estándares de seguridad y normativas vigentes. Nuestra solución de pesaje digital
                        garantiza la integridad de los datos, la trazabilidad y el cumplimiento de los requisitos
                        legales y regulatorios.</p>
                    </li>
                  </ol>
                  <h2 data-scrollspy-target id="benefits">Beneficios Clave:</h2>
                  <ul>
                    <li>Mejora de la eficiencia operativa.</li>
                    <li>Reducción de errores humanos.</li>
                    <li>Ahorro de tiempo y recursos.</li>
                    <li>Mayor precisión en la gestión de pesaje.</li>
                    <li>Cumplimiento de normativas y estándares.</li>
                  </ul>

                  <p>Opte por la excelencia en la gestión de pesaje con nuestra solución de automatización líder en la
                    industria. Transforme su operación hoy mismo y experimente los beneficios tangibles de una gestión
                    de pesaje digitalizada y conectada. Contáctenos para una demostración personalizada y descubra cómo
                    podemos potenciar su negocio.</p>

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
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#system">Sistema de Pesaje
                      Automático</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900"
                      href="#characteristics">Características Destacadas</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900"
                      href="#benefits">Beneficios Clave</a>
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