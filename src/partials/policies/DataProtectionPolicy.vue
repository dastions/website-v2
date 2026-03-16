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
                      to="/"><span class="tracking-normal text-blue-300">&lt;-</span> Volver al inicio</router-link>
                  </div>
                  <h1 id="Considerations" class="text-5xl font-bold mb-5" data-scrollspy-target>Política de Protección
                    de Datos
                  </h1>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL es el Responsable del tratamiento de los datos personales del
                    Usuario y le informa de que estos datos se tratarán de conformidad con lo dispuesto en el Reglamento
                    (UE) 2016/679, de 27 de abril (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), por lo
                    que se le facilita la siguiente información del tratamiento:
                  </p>

                  <p>
                    <strong>Fines y legitimación del tratamiento:</strong> mantener una relación comercial (por interés
                    legítimo del responsable, art. 6.1.f RGPD) y envío de comunicaciones de productos o servicios (con
                    el consentimiento del interesado, art. 6.1.a RGPD).
                  </p>

                  <p>
                    <strong>Criterios de conservación de los datos:</strong> se conservarán durante no más tiempo del
                    necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su
                    custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas
                    para garantizar la anonimización de los datos o la destrucción total de los mismos.
                  </p>

                  <p>
                    <strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, salvo obligación
                    legal.
                  </p>

                  <h3>Derechos que asisten al Usuario</h3>

                  <ul>
                    <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                    <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u
                      oposición a su tratamiento.</li>
                    <li>Derecho a presentar una reclamación ante la Autoridad de control (<a href="https://www.aepd.es"
                        target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se
                      ajusta a la normativa vigente.</li>
                  </ul>

                  <h3>Datos de contacto para ejercer sus derechos</h3>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL. CALLE PI I MARGALL, 10 Esc. A Baix 2a - 43007 Tarragona. E-mail:
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>
                  </p>

                  <h3>Datos de contacto del delegado de protección de datos</h3>

                  <p>
                    DATA GESTIÓ, Carrer Bonaventura Hernandez i Sanahuja 2-4-6, 43002 Tarragona -
                    <span class="text-blue-500">
                      info@datagestio.es
                    </span>
                  </p>

                  <p>
                    Para continuar debe aceptar que ha leído y está conforme con la cláusula anterior.
                  </p>
                </div>
              </article>

            </div>

            <!-- Right sidebar -->
            <aside class="max-md:hidden w-60 shrink-0 ml-6">
              <div
                class="sticky top-24 p-5 border-l border-r [border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.5),transparent)1]">
                <div class="font-bold">Legal</div>
                <ul class="text-sm space-y-2 mt-2">
                  <li>
                    <router-link class="text-gray-600 hover:text-gray-900 transition" to="/policies/legal-notice">Aviso
                      Legal
                    </router-link>
                  </li>
                  <li>
                    <router-link class="text-gray-600 hover:text-gray-900 transition"
                      to="/policies/privacy-policy">Política de Privacidad
                    </router-link>
                  </li>
                  <li>
                    <router-link class="text-gray-600 hover:text-gray-900 transition"
                      to="/policies/cookies-policy">Política de Cookies
                    </router-link>
                  </li>
                  <li>
                    <router-link class="text-gray-600 hover:text-gray-900 transition"
                      to="/policies/data-protection-policy">Política de Protección de Datos
                    </router-link>
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