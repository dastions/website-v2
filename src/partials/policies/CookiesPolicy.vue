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
                  <h1 id="Considerations" class="text-5xl font-bold mb-5" data-scrollspy-target>Política de Cookies
                  </h1>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                  <h2>INFORMACIÓN SOBRE COOKIES</h2>

                  <p>
                    Conforme con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de
                    comercio electrónico (LSSI), en relación con el Reglamento (UE) 2016/679 del Parlamento Europeo y
                    del Consejo, de 27 de abril de 2016, General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018,
                    de 5 de diciembre, de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), es
                    obligado obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies
                    prescindibles, antes de que este navegue por ellas.
                  </p>

                  <h3>¿QUÉ SON LAS COOKIES?</h3>

                  <p>
                    Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles,
                    son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de
                    sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.
                  </p>
                  <p>
                    Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos
                    concernientes al usuario, como sus preferencias para la visualización de las páginas de ese
                    servidor, nombre y contraseña, productos que más le interesan, etc.
                  </p>

                  <h3>COOKIES AFECTADAS POR LA NORMATIVA Y COOKIES EXCEPTUADAS</h3>

                  <p>
                    Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del
                    usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de
                    carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios
                    expresamente solicitados por el usuario.
                  </p>

                  <h3>TIPOS DE COOKIES</h3>

                  <h4>SEGÚN LA FINALIDAD</h4>

                  <ul>
                    <li>
                      <strong>Cookies técnicas y funcionales:</strong> son aquellas que permiten al usuario la
                      navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes
                      opciones o servicios que en ella existan.
                    </li>
                    <li>
                      <strong>Cookies analíticas:</strong> son aquellas que permiten al responsable de las mismas el
                      seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están
                      vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la
                      actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de
                      navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir
                      mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
                    </li>
                    <li>
                      <strong>Cookies publicitarias:</strong> son aquellas que permiten la gestión, de la forma más
                      eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una
                      página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios
                      como el contenido editado o la frecuencia en la que se muestran los anuncios.
                    </li>
                    <li>
                      <strong>Cookies de publicidad comportamental:</strong> recogen información sobre las preferencias
                      y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz
                      posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web,
                      aplicación o plataforma desde la que presta el servicio solicitado.
                    </li>
                    <li>
                      <strong>Cookies sociales:</strong> son establecidas por las plataformas de redes sociales en los
                      servicios para permitirle compartir contenido con sus amigos y redes. Las plataformas de medios
                      sociales tienen la capacidad de rastrear su actividad en línea fuera de los Servicios. Esto puede
                      afectar al contenido y los mensajes que ve en otros servicios que visita.
                    </li>
                    <li>
                      <strong>Cookies de afiliados:</strong> permiten hacer un seguimiento de las visitas procedentes de
                      otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).
                    </li>
                    <li>
                      <strong>Cookies de seguridad:</strong> almacenan información cifrada para evitar que los datos
                      guardados en ellas sean vulnerables a ataques maliciosos de terceros.
                    </li>
                  </ul>

                  <h4>SEGÚN LA PROPIEDAD</h4>

                  <ul>
                    <li>
                      <strong>Cookies propias:</strong> son aquellas que se envían al equipo terminal del usuario desde
                      un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio
                      solicitado por el usuario.
                    </li>
                    <li>
                      <strong>Cookies de terceros:</strong> son aquellas que se envían al equipo terminal del usuario
                      desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los
                      datos obtenidos través de las cookies.
                    </li>
                  </ul>

                  <h4>SEGÚN EL PLAZO DE CONSERVACIÓN</h4>

                  <ul>
                    <li>
                      <strong>Cookies de sesión:</strong> son un tipo de cookies diseñadas para recabar y almacenar
                      datos mientras el usuario accede a una página web.
                    </li>
                    <li>
                      <strong>Cookies persistentes:</strong> son un tipo de cookies en el que los datos siguen
                      almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el
                      responsable de la cookie, y que puede ir de unos minutos a varios años.
                    </li>
                  </ul>

                  <h3>TRATAMIENTO DE DATOS PERSONALES</h3>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL es el Responsable del tratamiento de los datos personales del
                    Interesado y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el
                    Reglamento (UE) 2016/679, de 27 de abril de 2016 (RGPD), por lo que se le facilita la siguiente
                    información del tratamiento:
                  </p>
                  <p>
                    <strong>Fines del tratamiento:</strong> según se especifica en el apartado de cookies que se
                    utilizan en este sitio web.
                  </p>
                  <p>
                    <strong>Legitimación del tratamiento:</strong> salvo en los casos en los que resulte necesario para
                    la navegación por la web, por consentimiento del interesado (art. 6.1.a RGPD).
                  </p>
                  <p>
                    <strong>Criterios de conservación de los datos:</strong> según se especifica en el apartado de
                    cookies utilizadas en la web.
                  </p>
                  <p>
                    <strong>Comunicación de los datos:</strong> no se comunicarán los datos a terceros, excepto en
                    cookies propiedad de terceros o por obligación legal.
                  </p>

                  <h4>Derechos que asisten al Interesado</h4>

                  <ul>
                    <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                    <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u
                      oposición a su tratamiento.</li>
                    <li>Derecho a presentar una reclamación ante la Autoridad de control (<a href="https://www.aepd.es"
                        target="_blank" rel="noopener noreferrer">www.aepd.es</a>) si considera que el tratamiento no se
                      ajusta a la normativa vigente.</li>
                  </ul>

                  <h4>Datos de contacto para ejercer sus derechos</h4>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL. CALLE PI I MARGALL, 10 Esc. A Baix 2a - 43007 Tarragona. E-mail:
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>
                  </p>

                  <h4>Datos de contacto del delegado de protección de datos</h4>

                  <p>
                    DATA GESTIÓ, Carrer Bonaventura Hernandez i Sanahuja 2-4-6, 43002 Tarragona -
                    <span class="text-blue-500">
                      info@datagestio.es
                    </span>
                  </p>

                  <h3>COOKIES UTILIZADAS EN ESTE SITIO WEB</h3>

                  <h4>COOKIES DE TERCEROS</h4>

                  <p>
                    Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo
                    momento sus condiciones de servicio, finalidad y utilización de las cookies, etc.
                  </p>

                  <h3>CÓMO GESTIONAR LAS COOKIES DESDE EL NAVEGADOR</h3>

                  <h4>Eliminar las cookies del dispositivo</h4>

                  <p>
                    Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador,
                    con lo que se suprimen las cookies de todos los sitios web visitados.
                  </p>
                  <p>
                    Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de
                    inicio de sesión o las preferencias de sitio web).
                  </p>

                  <h4>Gestionar las cookies específicas del sitio</h4>

                  <p>
                    Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden
                    ajustar su configuración de privacidad y cookies en el navegador.
                  </p>

                  <h4>Bloquear las cookies</h4>

                  <p>
                    Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen
                    cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada
                    vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar
                    correctamente (por ejemplo, los inicios de sesión con perfil).
                  </p>

                  <h3>CÓMO ELIMINAR LAS COOKIES DE LOS NAVEGADORES MÁS COMUNES</h3>

                  <ul>
                    <li>
                      <strong>Chrome</strong><br />
                      <a href="http://support.google.com/chrome/answer/95647?hl=es" target="_blank"
                        rel="noopener noreferrer">
                        http://support.google.com/chrome/answer/95647?hl=es
                      </a>
                    </li>
                    <li>
                      <strong>Edge</strong><br />
                      <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank" rel="noopener noreferrer">
                        https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                      </a>
                    </li>
                    <li>
                      <strong>Explorer</strong><br />
                      <a href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                        target="_blank" rel="noopener noreferrer">
                        https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer
                      </a>
                    </li>
                    <li>
                      <strong>Firefox</strong><br />
                      <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" target="_blank"
                        rel="noopener noreferrer">
                        https://www.mozilla.org/es-ES/privacy/websites/#cookies
                      </a>
                    </li>
                    <li>
                      <strong>Safari</strong><br />
                      <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank"
                        rel="noopener noreferrer">
                        https://support.apple.com/es-es/guide/safari/sfri11471/mac
                      </a>
                    </li>
                    <li>
                      <strong>Opera</strong><br />
                      <a href="https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData" target="_blank"
                        rel="noopener noreferrer">
                        https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData
                      </a>
                    </li>
                  </ul>
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