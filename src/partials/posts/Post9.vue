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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="smart-pay">App Smart Pay Una nueva forma
                    de gestionar el acceso a parking en espacios naturales</h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">{{ post_date
                        }}</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <p>
                    En nuestra apuesta por la <strong>innovación</strong> y la <strong>sostenibilidad</strong>, hemos
                    desarrollado una aplicación web que
                    facilita la gestión del acceso a parkings en reservas y espacios naturales. Con ella, los visitantes
                    pueden obtener un <strong>código QR</strong> para acceder al aparcamiento, mientras que los
                    ayuntamientos disponen de
                    una potente herramienta de administración del servicio.
                  </p>
                  <iframe src="https://www.youtube.com/embed/jfYukGbFxFk" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen class="w-full aspect-video my-8"></iframe>

                  <h2 data-scrollspy-target id="comfort-safety">Para los visitantes: comodidad y seguridad</h2>

                  <p>
                    Los usuarios solo necesitan hacer una <strong>reserva online antes de su visita</strong>. De este
                    modo, se aseguran
                    una plaza de aparcamiento en la zona habilitada y evitan desplazamientos innecesarios o
                    aglomeraciones.
                    Además, quienes lleguen sin reserva previa también podrán acceder: en la propia barrera encontrarán
                    un <strong>código QR que permitirá comprobar en tiempo real si quedan plazas disponibles</strong> y
                    realizar la
                    reserva al instante.
                  </p>

                  <h2 data-scrollspy-target id="control-flexibility">Para los ayuntamientos: control y flexibilidad</h2>

                  <p>La aplicación no solo gestiona reservas, sino que también ofrece a los ayuntamientos un panel de
                    administración intuitivo, desde el cual pueden:</p>
                  <ul>
                    <li><strong>Abrir o cerrar la barrera de acceso</strong> de forma manual o temporal.</li>
                    <li><strong>Programar horarios y calendarios de apertura automática</strong>, ajustados a la
                      temporada turística o a necesidades específicas.</li>
                    <li><strong>Dar de alta a vecinos y residentes</strong>, que podrán disfrutar de <strong>reservas
                        gratuitas y acceso ilimitado al aparcamiento.</strong></li>
                  </ul>

                  <h2 data-scrollspy-target id="sustainability">Un paso hacia la sostenibilidad</h2>

                  <p>La gestión de aparcamientos mediante esta aplicación contribuye a:</p>
                  <ul>
                    <li><strong>Evitar la masificación</strong> en espacios de gran valor natural.</li>
                    <li><strong>Regular la capacidad de acogida</strong>, garantizando una visita más ordenada y segura.
                    </li>
                    <li><strong>Promover un turismo responsable y respetuoso con el entorno.</strong></li>
                  </ul>

                  <h2 data-scrollspy-target id="agger-la-pertussa">Caso de éxito: Àger y el Congosto de Mont-rebei</h2>

                  <p>
                    Uno de los primeros municipios en implementar este sistema es <strong>Àger</strong>, donde ya se
                    regula el acceso al
                    parking de la Pertusa, punto de entrada al <strong>Congosto de Mont-rebei</strong>. Gracias a esta
                    herramienta, el
                    ayuntamiento ha podido <strong>organizar mejor el flujo de visitantes</strong>, implantar un sistema
                    de <strong>reservas
                      online y pago automático</strong> y ofrecer acceso gratuito a los vecinos.
                  </p>

                  <p>
                    Con este modelo, se logra un equilibrio entre el disfrute del entorno natural y su conservación a
                    largo plazo.
                  </p>

                  <p>
                    👉 Con esta aplicación, damos a los municipios la tecnología necesaria para gestionar de forma
                    inteligente sus espacios naturales, asegurando tanto la satisfacción de los visitantes como la
                    preservación del entorno.
                  </p>
                  <router-link to="/contact">
                    <button
                      class="btn text-white bg-dastions-primary hover:bg-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group sm:ml-4">
                      <span class="relative inline-flex items-center">
                        Contacta con Nosotros
                        <span class="tracking-normal text-accent group-hover:translate-x-0.5 transition-transform ml-1">
                          -&gt;
                        </span>
                      </span>
                    </button>
                  </router-link>
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
                    <HashLink :to="{ hash: '#smart-pay' }" class="text-gray-700 hover:text-gray-900">Nueva forma de gestionar el acceso a parking</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#comfort-safety' }" class="text-gray-700 hover:text-gray-900">
                      Comodidad y seguridad</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#control-flexibility' }" class="text-gray-700 hover:text-gray-900">Control y flexibilidad</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#sustainability' }" class="text-gray-700 hover:text-gray-900">Un paso hacia la sostenibilidad</HashLink>
                  </li>
                  <li>
                    <HashLink :to="{ hash: '#agger-la-pertussa' }" class="text-gray-700 hover:text-gray-900">Àger y el Congosto de Mont-rebei</HashLink>
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