<script setup>
import HashLink from "../../components/HashLink.vue";
import Footer from "../Footer.vue";
import Header from "../Header.vue";
import PageIllustration from "../PageIllustration.vue"
import VideoPlayer from "../VideoPlayer.vue"
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
                  <h1 class="text-5xl font-bold mb-5" data-scrollspy-target id="monitoring">Monitorización Remota
                    DASTIONS
                    NetGuard: Seguridad,
                    Prevención y Control Total
                  </h1>
                  <div class="flex items-center gap-3">
                    <img class="rounded-full" src="../../images/albert.jpg" width="32" height="32" alt="Author 01" />
                    <div class="text-sm text-gray-500">Albert Mauri Guiu · <span class="text-gray-700">{{ post_date
                        }}</span>
                    </div>
                  </div>
                </header>

                <div
                  class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">

                  <p>
                    En <strong>DASTIONS</strong> contamos con décadas de experiencia como
                    especialistas en pesaje industrial, una trayectoria que nos ha
                    permitido consolidarnos como referentes en precisión y fiabilidad.
                    Hoy, gracias a la ampliación de nuestro equipo con profesionales de
                    gran experiencia en <strong>IoT</strong> y digitalización industrial, hemos dado un
                    paso decisivo hacia el futuro: la monitorización remota.
                  </p>
                  <p>
                    Esta evolución nos permite ir más allá del control tradicional,
                    ofreciendo a nuestros clientes la posibilidad de supervisar sus
                    instalaciones desde cualquier lugar, con datos en tiempo real y la
                    garantía de un sistema seguro, ágil y orientado a la prevención.
                  </p>
                  <img src="../../images/data-collection.png" class="img-fluid" alt="Camion Báscula"
                    style="margin: 20px">
                  <h2 data-scrollspy-target id="netguards">¿Qué es DASTIONS NetGuard?</h2>

                  <p>
                    <strong>DASTIONS NetGuard</strong> es un sistema avanzado de monitorización
                    remota de sensores, diseñado para sectores como la industria del
                    pesaje, la agricultura, la construcción, el sector químico y las
                    infraestructuras portuarias. Su objetivo es proporcionar una visión
                    global y segura del estado de cualquier instalación, almacenando
                    todos los datos en el <strong>DTM i4</strong>, la plataforma tecnológica propia
                    desarrollada por <strong>DASTIONS</strong>.
                  </p>

                  <p>
                    Los principales usuarios son empresas profesionales que buscan
                    optimizar sus operaciones, mejorar la prevención de incidencias y
                    contar con un sistema fiable para tomar decisiones estratégicas en
                    tiempo real.
                  </p>

                  <h2 data-scrollspy-target id="benefits">¿Qué beneficios aportan los datos medidos?</h2>

                  <p>
                    Los datos recopilados permiten conocer con detalle el estado de cada
                    instalación: el rendimiento de básculas y celdas de carga,
                    determinación de centro de gravedad en estructuras con los valores
                    de peso, controlar en tiempo real las fuerzas ejercidas sobre
                    estructuras o la inclinación de muros en obras, entre muchos otros.
                    Más allá de la supervisión inmediata, esta información se convierte
                    en la base para análisis predictivos mediante inteligencia artificial,
                    anticipando problemas antes de que ocurran y garantizando así una
                    mayor seguridad y eficiencia.
                  </p>

                  <h2 data-scrollspy-target id="storage">¿Dónde se almacenan y cómo se visualizan?</h2>

                  <p>
                    Todos los valores capturados son enviados de manera segura al
                    sistema <strong>DTM i4</strong>, una plataforma desarrollada íntegramente por
                    <strong>DASTIONS</strong> para garantizar la máxima fiabilidad y confidencialidad
                    en el almacenamiento de datos.
                    Desde allí, el cliente puede acceder a la información a través de un
                    panel de control web, intuitivo y visual, que permite consultar datos
                    actuales e históricos en gráficos claros y dinámicos. El acceso puede
                    realizarse desde un ordenador, portátil, tablet o teléfono móvil,
                    siempre mediante conexión segura.
                  </p>

                  <h2 data-scrollspy-target id="problem-detection">¿Cómo se detectan los problemas en la
                    instalación?
                  </h2>

                  <p>
                    El sistema está diseñado para garantizar una respuesta rápida y
                    preventiva. Ante cualquier anomalía o superación de parámetros
                    críticos, el usuario recibe una alerta inmediata mediante correo
                    electrónico o SMS. De esta manera, se pueden activar protocolos de
                    mantenimiento o reparación antes de que la incidencia provoque un
                    fallo mayor o un coste inesperado.
                  </p>

                  <h2 data-scrollspy-target id="compatibilities">¿Es compatible con instalaciones existentes?</h2>

                  <p>
                    Sí. <strong>DASTIONS NetGuard</strong> puede implementarse tanto en
                    instalaciones nuevas como en aquellas ya en funcionamiento. Solo es
                    necesario verificar la compatibilidad con el sistema y, en casos
                    concretos, realizar un análisis previo de la instalación. Su carácter
                    universal permite una adaptación flexible y sencilla en la mayoría de
                    los escenarios.
                  </p>

                  <h2 data-scrollspy-target id="multiples-instalaciones">¿Se pueden supervisar varias instalaciones a la
                    vez?</h2>
                  <p>
                    El sistema está preparado para gestionar simultáneamente múltiples
                    instalaciones. A través del panel de control, el cliente visualiza un
                    mapa con todas sus ubicaciones y, con un solo clic, accede al estado
                    detallado de cada una. También es posible configurar alarmas
                    globales para todas las instalaciones sin restricciones.
                  </p>

                  <h2 data-scrollspy-target id="ai-integration">¿Se puede integrar inteligencia artificial?
                  </h2>

                  <p>
                    Sí. La inteligencia artificial es un valor añadido de <strong>DASTIONS
                      NetGuard</strong>. A medida que el sistema recopila más datos, las
                    posibilidades de análisis predictivo se amplían. Cuantos más datos se
                    generen, mayor será la precisión de las predicciones. Nuestro equipo
                    ya trabaja en la integración de redes neuronales que permitan
                    adelantarse a fallos y optimizar aún más los procesos.
                  </p>

                  <h2 data-scrollspy-target id="implementation">¿La implementación es complicada o costosa?</h2>

                  <p>
                    No. Al contrario, su implementación supone un ahorro significativo
                    de tiempo y recursos.
                    Con el diagnóstico remoto, se reducen las paradas imprevistas, se
                    optimizan las inspecciones y se mejora la organización del trabajo.
                    Además, la rapidez en la respuesta minimiza el impacto de posibles
                    incidencias, generando entornos de mayor tranquilidad para el
                    cliente.
                    En definitiva, se trata de una inversión que se traduce en seguridad,
                    prevención y eficiencia a largo plazo.
                  </p>

                  <h2 data-scrollspy-target id="conclusion">Conclusión: El futuro del control industrial ya está aquí
                  </h2>

                  <p>
                    La monitorización remota no es solo una mejora tecnológica, sino un
                    cambio de paradigma. Con <strong>DASTIONS NetGuard</strong>, las empresas no
                    solo ganan en control y fiabilidad, sino que también se aseguran un
                    sistema preparado para los desafíos del futuro.
                    Transformamos datos en prevención, prevención en seguridad y
                    seguridad en confianza.
                    Con <strong>DASTIONS</strong>, su planta productiva estará siempre bajo control.
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
                    <HashLink :to="{ hash: '#monitoring' }" class="text-gray-700 hover:text-gray-900">Seguridad,
                      Prevención y Control Total</HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#netguards' }" class="text-gray-700 hover:text-gray-900">¿Qué es DASTIONS
                      NetGuard?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#benefits' }" class="text-gray-700 hover:text-gray-900">¿Qué beneficios
                      aportan los datos medidos?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#storage' }" class="text-gray-700 hover:text-gray-900">¿Dónde se
                      almacenan y cómo se visualizan?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#problem-detection' }" class="text-gray-700 hover:text-gray-900">
                      ¿Cómo se detectan los problemas en la instalación?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#compatibilities' }" class="text-gray-700 hover:text-gray-900">¿Es
                      compatible
                      con instalaciones existentes?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#multiples-instalaciones' }" class="text-gray-700 hover:text-gray-900">
                      ¿Se pueden supervisar varias instalaciones a la vez?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#ai-integration' }" class="text-gray-700 hover:text-gray-900">
                      ¿Se puede integrar inteligencia artificial?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#implementation' }" class="text-gray-700 hover:text-gray-900">¿La
                      implementación es complicada o costosa?
                    </HashLink>
                  </li>
                  <li>
                    <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                    <HashLink :to="{ hash: '#conclusion' }" class="text-gray-700 hover:text-gray-900">Conclusión: El
                      futuro del control industrial ya está aquí
                    </HashLink>
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