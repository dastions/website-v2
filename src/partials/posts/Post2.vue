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
                  <h1 class="text-5xl font-bold mb-5">Detectores de Rayos X
                    Alimentarios</h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">Mar 20,
                        2024</span>
                    </div>
                  </div>
                </header>
                <img src="../../images/rayos-x-lomatec-soluciones.png" class="img-fluid" alt="Camion Báscula"
                  style="margin: 20px">
                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <h2 data-scrollspy-target id="install">¿Por qué debo instalar un detector de rayos X en mi fábrica?
                  </h2>
                  <p>Instalar un detector de rayos X en tu fábrica puede ofrecer una serie de ventajas significativas,
                    especialmente en la industria alimentaria, donde la seguridad y la calidad son de suma importancia.
                    Aquí hay algunas razones por las que podría considerar la instalación de un detector de rayos X:</p>
                  <ol>
                    <li>
                      <p><strong>Detección de contaminantes metálicos:</strong> Los detectores de rayos X pueden
                        identificar incluso partículas metálicas minúsculas en los productos alimenticios, lo que puede
                        ser esencial para evitar la contaminación y garantizar la seguridad alimentaria. Esto es crucial
                        para cumplir con las regulaciones de seguridad alimentaria que exigen la detección y prevención
                        de contaminación por metales.</p>
                    </li>
                    <li>
                      <p><strong>Detección de cuerpos extraños no metálicos:</strong> Además de los metales, los
                        detectores de rayos X pueden identificar otros materiales no metálicos como vidrio, plástico,
                        hueso, piedra, entre otros, que podrían haberse introducido accidentalmente en el producto
                        durante el proceso de fabricación.</p>
                    </li>
                  </ol>
                  <img src="../../images/rayos-z-rayos-x-expulsion.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <ol start="3">
                    <li>
                      <p><strong>Cumplimiento normativo:</strong> En muchas regiones, existen regulaciones estrictas en
                        cuanto a la seguridad alimentaria, que exigen a los fabricantes implementar medidas para
                        prevenir la contaminación de los alimentos. La instalación de un detector de rayos X puede
                        ayudarte a cumplir con estas normativas y evitar sanciones legales.</p>
                    </li>
                    <li>
                      <p><strong>Mejora de la calidad del producto:</strong> Al detectar y eliminar cuerpos extraños y
                        contaminantes metálicos, se mejora la calidad del producto final, lo que puede aumentar la
                        confianza del consumidor y la reputación de tu marca.</p>
                    </li>
                    <li>
                      <p><strong>Reducción de riesgos para la salud pública:</strong> Evitar la contaminación de los
                        alimentos es fundamental para proteger la salud pública. Los detectores de rayos X ayudan a
                        prevenir la presencia de contaminantes que podrían causar enfermedades o lesiones a los
                        consumidores.</p>
                    </li>
                  </ol>
                  <img src="../../images/rayos-x-minebea.png" class="img-fluid" alt="Camion Báscula"
                    data-scrollspy-target id="contact" style="margin: 20px">
                  <router-link to="/contact">
                    <button
                      class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4">
                      <span class="relative inline-flex items-center">
                        Ver Rayos X
                        <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                          -&gt;
                        </span>
                      </span>
                    </button>
                  </router-link>

                  <p>En cuanto a las nuevas normativas y exigencias alimentarias, estas pueden variar según la región y
                    el país, pero en general, hay una tendencia hacia regulaciones más estrictas en cuanto a la
                    seguridad alimentaria. Esto incluye requisitos específicos para la detección y prevención de
                    contaminantes en los alimentos. Las autoridades reguladoras suelen actualizar regularmente estas
                    normativas para asegurarse de que reflejen los avances en la tecnología y las mejores prácticas en
                    la industria alimentaria.</p>
                  <p>En España puedes consultar en el <strong>Real Decreto</strong> los Reglamentos sobre instalación y
                    utilización de aparatos de rayos X con fines alimentarios.</p>
                  <p>En resumen, instalar un <strong>detector de rayos X</strong> en tu fábrica puede ayudarte a
                    <strong>cumplir con las normativas de seguridad</strong> alimentaria, <strong>mejorar la
                      calidad</strong> del producto y proteger la <strong>salud de los consumidores</strong>, lo que a
                    su vez puede beneficiar la <strong>reputación</strong> y el <strong>éxito a largo plazo</strong> de
                    tu empresa.
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
                    <HashLink :to="{ hash: '#install' }" class="text-gray-700 hover:text-gray-900">¿Por qué debo
                      instalar un detector de rayos X en mi fábrica?</HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#contact' }" class="text-gray-700 hover:text-gray-900">Contacte con
                      nuestros expertos.</HashLink>
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