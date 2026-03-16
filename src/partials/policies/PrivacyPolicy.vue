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
                  <h1 id="Considerations" class="text-5xl font-bold mb-5" data-scrollspy-target>Política de Privacidad
                  </h1>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <h2>INFORMACIÓN AL USUARIO</h2>

                  <h3>¿Quién es el responsable del tratamiento de tus datos personales?</h3>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL es el RESPONSABLE del tratamiento de los datos personales del
                    USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el
                    Reglamento (UE) 2016/679, de 27 de abril (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre
                    (LOPDGDD).
                  </p>

                  <h3>¿Para qué tratamos tus datos personales?</h3>

                  <p>Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el
                    tratamiento son:</p>

                  <ul>
                    <li>
                      Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, redes sociales o
                      cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar
                      comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y estarán
                      relacionadas con sus productos y servicios, o de sus colaboradores o proveedores, con los que este
                      haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los
                      datos personales.
                    </li>
                    <li>
                      Realizar estudios de mercado y análisis estadísticos.
                    </li>
                    <li>
                      Tramitar encargos, solicitudes, dar respuesta a las consultas o cualquier tipo de petición que sea
                      realizada por el USUARIO a través de cualquiera de las formas de contacto que se ponen a su
                      disposición en la página web del RESPONSABLE.
                    </li>
                    <li>
                      Remitir el boletín informativo online, sobre novedades, ofertas y promociones en nuestra
                      actividad.
                    </li>
                  </ul>

                  <h3>¿Por qué motivo podemos tratar tus datos personales?</h3>

                  <p>Porque el tratamiento está legitimado por el artículo 6 del RGPD de la siguiente forma:</p>

                  <ul>
                    <li>
                      Con el consentimiento del USUARIO: remisión de comunicaciones comerciales y del boletín
                      informativo.
                    </li>
                    <li>
                      Por interés legítimo del RESPONSABLE: realizar estudios de mercado, análisis estadísticos, etc. y
                      tramitar encargos, solicitudes, etc. a petición del USUARIO.
                    </li>
                  </ul>

                  <h3>¿Durante cuánto tiempo guardaremos tus datos personales?</h3>

                  <p>
                    Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan
                    prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se
                    suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la
                    destrucción total de los mismos.
                  </p>

                  <h3>¿A quién facilitamos tus datos personales?</h3>

                  <p>
                    No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para
                    el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios
                    relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de
                    confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.
                  </p>

                  <h3>¿Cuáles son tus derechos?</h3>

                  <p>Los derechos que asisten al USUARIO son:</p>

                  <ul>
                    <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                    <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u
                      oposición a su tratamiento.</li>
                    <li>Derecho a presentar una reclamación ante la autoridad de control (<a href="https://www.aepd.es"
                        target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se
                      ajusta a la normativa vigente.</li>
                  </ul>

                  <h3>Datos de contacto para ejercer sus derechos</h3>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL. CALLE PI I MARGALL, 10 Esc. A Baix 2a - 43007 Tarragona.
                  </p>
                  <p>
                    E-mail:
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>.
                  </p>

                  <h3>Datos de contacto del delegado de protección de datos</h3>

                  <p>
                    DATA GESTIÓ, Carrer Bonaventura Hernandez i Sanahuja 2-4-6, 43002 Tarragona -
                    <span class="text-blue-500">
                      info@datagestio.es
                    </span>
                  </p>

                  <h2>CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h2>

                  <p>
                    Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los
                    campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de
                    descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para
                    atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos
                    restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se
                    hace responsable de comunicar cualquier modificación de estos.
                  </p>
                  <p>
                    El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios,
                    ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se
                    faciliten todos los datos, no se garantiza que la información y servicios facilitados sean
                    completamente ajustados a sus necesidades.
                  </p>

                  <h2>MEDIDAS DE SEGURIDAD</h2>

                  <p>
                    Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el
                    RESPONSABLE está cumpliendo con todas las disposiciones de las normativas RGPD y LOPDGDD para el
                    tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios
                    descritos en el artículo 5 del RGPD, por los cuales son tratados de manera lícita, leal y
                    transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en
                    relación con los fines para los que son tratados.
                  </p>
                  <p>
                    El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para
                    aplicar las medidas de seguridad que establecen el RGPD y la LOPDGDD con el fin de proteger los
                    derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan
                    ejercerlos.
                  </p>
                  <p>
                    Para más información sobre las garantías de privacidad, puedes dirigirte al RESPONSABLE a través de
                    DIGITAL APPLICATION SOLUTIONS SL. CALLE PI I MARGALL, 10 Esc. A Baix 2a - 43007 Tarragona. E-mail:
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>.
                  </p>
                  <p>
                    Datos de contacto del delegado de protección de datos:
                    <span class="text-blue-500">
                      info@datagestio.es
                    </span>
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