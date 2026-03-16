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
                  <h1 id="Considerations" class="text-5xl font-bold mb-5" data-scrollspy-target>Aviso Legal
                  </h1>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">

                  <h3>LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)</h3>

                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL, responsable del sitio web, en adelante RESPONSABLE, pone a
                    disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las
                    obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                    Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios
                    del sitio web respecto a cuáles son las condiciones de uso.
                  </p>
                  <p>
                    Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la
                    observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra
                    disposición legal que fuera de aplicación.
                  </p>
                  <p>
                    DIGITAL APPLICATION SOLUTIONS SL se reserva el derecho de modificar cualquier tipo de información
                    que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento
                    de los usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el sitio web de
                    DIGITAL APPLICATION SOLUTIONS SL.
                  </p>

                  <h3>DATOS IDENTIFICATIVOS</h3>

                  <p>
                    <strong>Nombre de dominio:</strong>
                    <a href="https://dastions.com" class="text-blue-500 hover:text-blue-600 transition-colors"
                      target="_blank" rel="noopener noreferrer">
                      dastions.com
                    </a>
                  </p>
                  <p><strong>Nombre comercial:</strong> DASTIONS</p>
                  <p><strong>Denominación social:</strong> DIGITAL APPLICATION SOLUTIONS SL</p>
                  <p><strong>NIF:</strong> B72926538</p>
                  <p><strong>Domicilio social:</strong> Calle Pi i Maragall 10, Esc. A, Baix 2a - 43007 Tarragona</p>
                  <p><strong>Teléfono:</strong> 977131206</p>
                  <p>
                    <strong>E-mail:</strong>
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>
                  </p>

                  <h3>DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>

                  <p>
                    El sitio web, incluyendo a título enunciativo, pero no limitativo su programación, edición,
                    compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o
                    gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa
                    por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos
                    por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos
                    correspondientes.
                  </p>
                  <p>
                    Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial,
                    uso, explotación, distribución y comercialización, requiere en todo caso la autorización escrita
                    previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un
                    incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
                  </p>
                  <p>
                    Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio
                    web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier
                    posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE autoriza
                    expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web,
                    y en todo caso redirigir al sitio web principal de dastions.com.
                  </p>
                  <p>
                    El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad
                    intelectual e industrial, no implicando su sola mención o aparición en el sitio web la existencia de
                    derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o
                    recomendación por parte de este.
                  </p>
                  <p>
                    Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de
                    propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede
                    hacerlo a través del correo electrónico
                    <span class="text-blue-500">
                      support@dastions.com
                    </span>.
                  </p>

                  <h3>EXENCIÓN DE RESPONSABILIDADES</h3>

                  <p>
                    El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en
                    su sitio web siempre que no tenga conocimiento efectivo de que esta información haya sido manipulada
                    o introducida por un tercero ajeno al mismo o, si lo tiene, haya actuado con diligencia para retirar
                    los datos o hacer imposible el acceso a ellos.
                  </p>

                  <h4>Uso de Cookies</h4>

                  <p>
                    Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor
                    envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son
                    consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies
                    utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la
                    navegación, y desaparecen al terminar la sesión del usuario. En ningún caso, estas cookies
                    proporcionan por sí mismas datos de carácter personal y no se utilizarán para la recogida de estos.
                  </p>
                  <p>
                    Mediante el uso de cookies también es posible que el servidor donde se encuentra la web reconozca el
                    navegador utilizado por el usuario con la finalidad de que la navegación sea más sencilla,
                    permitiendo, por ejemplo, el acceso de los usuarios que se hayan registrado previamente a las áreas,
                    servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en
                    cada visita. También se pueden utilizar para medir la audiencia, parámetros de tráfico, controlar el
                    progreso y número de entradas, etc., siendo en estos casos cookies prescindibles técnicamente, pero
                    beneficiosas para el usuario. Este sitio web no instalará cookies prescindibles sin el
                    consentimiento previo del usuario.
                  </p>
                  <p>
                    El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de
                    cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su
                    navegador para ampliar esta información.
                  </p>

                  <h3>Política de enlaces</h3>

                  <p>
                    Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el
                    RESPONSABLE no puede controlar siempre los contenidos introducidos por terceros en sus respectivos
                    sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso,
                    procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación
                    nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la
                    redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido
                    en cuestión.
                  </p>
                  <p>
                    El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título
                    enunciativo, pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales
                    o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la
                    página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16
                    de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad,
                    colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que
                    puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la
                    moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún
                    contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma
                    inmediata al administrador del sitio web.
                  </p>
                  <p>
                    Este sitio web se ha revisado y probado para que funcione correctamente. En principio, puede
                    garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el
                    RESPONSABLE no descarta la posibilidad de que existan ciertos errores de programación, o que
                    acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que
                    hagan imposible el acceso a la página web.
                  </p>

                  <h3>Direcciones IP</h3>

                  <p>
                    Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de
                    dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un
                    ordenador cuando este se conecta a Internet. Toda esta información se registra en un fichero de
                    actividad del servidor que permite el posterior procesamiento de los datos con el fin de obtener
                    mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el
                    número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
                  </p>

                  <h3>LEY APLICABLE Y JURISDICCIÓN</h3>

                  <p>
                    Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o
                    de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se
                    someten expresamente las partes, siendo competentes para la resolución de todos los conflictos
                    derivados o relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar
                    del cumplimiento de la obligación.
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