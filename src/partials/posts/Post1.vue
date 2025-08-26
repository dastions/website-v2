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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="consider">¿Qué debo tener en cuenta a la
                    hora de comprar un detector de Rayos X?
                  </h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">Mar 21,
                        2024</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <img src="../../images/rayos-x-minebea.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <p>
                    Al considerar la compra de un detector de rayos X para tu fábrica, es importante tener en cuenta
                    varios
                    factores para asegurarte de que el equipo seleccionado satisfaga las necesidades específicas de tu
                    negocio. Aquí hay algunas consideraciones clave:
                  </p>

                  <ol>
                    <li>
                      <p><strong>Tipo de productos a inspeccionar:</strong> Determina qué tipos de productos vas a
                        inspeccionar con el detector de rayos X. Algunos detectores están diseñados para productos
                        envasados, mientras que otros son más adecuados para productos a granel. Asegúrate de que el
                        detector que elijas sea compatible con los productos que fabricas.</p>
                    </li>
                    <li>
                      <p><strong>Tamaño y capacidad de producción:</strong> Considera el volumen de producción de tu
                        fábrica
                        y el tamaño de los productos que inspeccionarás. Necesitarás un detector de rayos X que pueda
                        manejar tu capacidad de producción y que tenga la capacidad de detectar contaminantes en
                        productos
                        de diferentes tamaños y formas.</p>
                    </li>
                    <li>
                      <p><strong>Nivel de sensibilidad y precisión:</strong> Busca un detector de rayos X que ofrezca un
                        alto nivel de sensibilidad para detectar incluso contaminantes muy pequeños. La precisión en la
                        detección es fundamental para garantizar la seguridad alimentaria y cumplir con las
                        regulaciones.
                      </p>
                    </li>
                    <li>
                      <p><strong>Facilidad de uso y mantenimiento:</strong> Elige un detector de rayos X que sea fácil
                        de
                        usar y mantener. Esto incluye características como interfaces de usuario intuitivas, sistemas de
                        autocalibración y facilidad para limpiar y dar mantenimiento al equipo.</p>
                    </li>
                  </ol>
                  <img src="../../images/rayos-z-rayos-x-expulsion.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <ol start="5">
                    <li>
                      <p><strong>Integración con sistemas existentes:</strong> Si tu fábrica ya utiliza otros equipos de
                        inspección o sistemas de producción, asegúrate de que el detector de rayos X pueda integrarse
                        fácilmente con estos sistemas. La interoperabilidad entre equipos puede mejorar la eficiencia y
                        la
                        productividad.</p>
                    </li>
                    <li>
                      <p><strong>Soporte técnico y servicio postventa:</strong> Investiga sobre la reputación del
                        fabricante
                        en términos de soporte técnico y servicio postventa. Es importante contar con un proveedor
                        confiable
                        que ofrezca asistencia técnica, capacitación y servicio de mantenimiento cuando sea necesario.
                      </p>
                    </li>
                    <li>
                      <p><strong>Cumplimiento normativo:</strong> Verifica que el detector de rayos X cumpla con las
                        regulaciones y estándares de seguridad alimentaria aplicables en tu región. Asegúrate de que el
                        equipo esté certificado por organismos reguladores reconocidos.</p>
                    </li>
                    <li>
                      <p><strong>Costo total de propiedad:</strong> Considera no solo el costo inicial de adquisición
                        del
                        detector de rayos X, sino también los costos asociados con el funcionamiento, mantenimiento y
                        calibración a lo largo del tiempo. Calcula el costo total de propiedad para tomar una decisión
                        informada.</p>
                    </li>
                  </ol>
                  <p>
                    Al evaluar estas consideraciones y comparar diferentes opciones de detectores de rayos X, podrás
                    seleccionar el equipo que mejor se adapte a las necesidades y requisitos de tu fábrica.
                  </p>

                  <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                  <h2 data-scrollspy-target id="contact">Contacte con uno de nuestros expertos comerciales:</h2>
                    <button
                      class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4"
                      href="#0">
                      <span class="relative inline-flex items-center">
                        Formulario
                        <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                          -&gt;
                        </span>
                      </span>
                    </button>

                  <p>
                    Instalar un detector de rayos X en tu fábrica puede ayudarte a cumplir con las normativas de
                    seguridad alimentaria, mejorar la calidad del producto y proteger la salud de los consumidores, lo
                    que a su vez puede beneficiar la reputación y el éxito a largo plazo de tu empresa.
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
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#consider">¿Qué debo tener en
                      cuenta?</a>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <a data-scrollspy-link class="text-gray-700 hover:text-gray-900" href="#contact">Contacte con
                      nuestros expertos.</a>
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