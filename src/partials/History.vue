<script setup>
import HashLink from '../components/HashLink.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import PageIllustration from './PageIllustration.vue';


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
                                    <h1 id="history" class="text-5xl font-bold mb-5" data-scrollspy-target>Nuestra
                                        Historia: De los Orígenes a la Cuarta Generación</h1>
                                    <div class="flex items-center gap-3">
                                        <img class="rounded-full" src="../images/albert.jpg" width="32" height="32"
                                            alt="Author 01" />
                                        <div class="text-sm text-gray-500">Albert Mauri Guiu · <span
                                                class="text-gray-700">Mar 21,
                                                2024</span>
                                        </div>
                                    </div>
                                </header>

                                <div
                                    class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24 prose-blockquote:pl-4 prose-blockquote:xl:-ml-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:italic">
                                    <p>
                                        El bagaje profesional que durante más de 40 años hemos desarrollado en la
                                        familia siempre ha estado ligado a la industria y a grandes compañías, lo que
                                        nos ha dado conocimiento en múltiples sectores, tanto industriales,
                                        agrícolas, ganaderos, pesqueros y en general en todos los ámbitos de la
                                        economía productiva. Inicialmente, nuestro enfoque se centró en España,
                                        pero en esta nueva etapa, gracias a los avances tecnológicos e Internet,
                                        hemos expandido nuestra presencia a otros continentes. Nuestro éxito
                                        radica en la colaboración con partners locales que no tienen o no desean
                                        invertir en departamentos de ingeniería avanzada debido al alto coste de
                                        estos, lo que hace que las relaciones colaborativas sean el modelo del futuro.
                                    </p>

                                    <p>
                                        La trayectoria de nuestra empresa se remonta a 1924, cuando Antonio
                                        Collado González, nuestro abuelo materno, inició su carrera en el sector del
                                        pesaje industrial con la empresa inglesa AVERY. A lo largo de las décadas, la
                                        experiencia y el conocimiento se han transmitido de generación en
                                        generación, consolidando un legado de innovación, servicio y compromiso
                                        con la industria del pesaje.
                                    </p>

                                    <p>
                                        En 1987, se estableció formalmente <strong>Básculas Mauri</strong>, empresa que
                                        evolucionó a lo largo de los años con la incorporación de nuevas tecnologías
                                        y servicios. Con una fuerte presencia en el mercado, nuestra compañía ha
                                        trabajado con marcas reconocidas como <strong>MOBBA, EPELSA, PIBERNAT y
                                            METTLER TOLEDO.</strong> Esta evolución constante nos permitió diversificar
                                        nuestras capacidades, formar alianzas estratégicas y ampliar nuestro campo
                                        de acción.
                                    </p>

                                    <h2 id="evolution" data-scrollspy-target>La Evolución desde 2022 hasta la Creación
                                        de Dastions</h2>

                                    <p>
                                        En 2022, con la tercera generación consolidada, iniciamos un proceso de
                                        transformación para adaptarnos a los retos del nuevo milenio. Este proceso
                                        culminó con la creación de <strong>Dastions</strong>, liderada por Oriol Mauri,
                                        representando la cuarta generación de nuestra familia en el sector del pesaje
                                        industrial.
                                    </p>

                                    <p>
                                        Dastions nace con la visión de integrar las nuevas tecnologías en la industria,
                                        especializándose en <strong>IoT (Internet of Things) aplicado al pesaje y la
                                            ingeniería de adquisición de datos</strong>, brindando a nuestros clientes
                                        un
                                        sistema de mejora continua a través del uso inteligente de la información.
                                    </p>

                                    <h2 id="innovation" data-scrollspy-target>Innovación y Colaboraciones Estratégicas
                                    </h2>

                                    <p>
                                        La cuarta generación ha identificado la necesidad de evolucionar e
                                        incorporar un equipo de ingenieros altamente cualificados, así como
                                        establecer alianzas con empresas, instituciones académicas y tecnologías de
                                        vanguardia. Destacamos nuestra colaboración con:
                                    </p>

                                    <ul>
                                        <li>
                                            <p>
                                                <strong>Universitat Politècnica de Catalunya (UPC)</strong>, en especial
                                                con el
                                                <strong>Departamento de Ingeniería electrónica</strong>, liderado por el
                                                <strong>Dr.
                                                    Vicenç Parisi Baradad</strong>, experto en ingeniería de
                                                telecomunicaciones
                                                y miembro del grupo de investigación <strong>SARTI</strong>&nbsp;
                                                <a href="https://sarti.webs.upc.edu/web_v2/"
                                                    target="_blank">https://sarti.webs.upc.edu/web_v2/</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Applus+</strong>, en colaboración con <strong>David Cabré
                                                    Canela</strong>, para garantizar
                                                la calidad y eficiencia en nuestros procesos de certificación y
                                                validación de tecnologías.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Integración con ERP:</strong> Conectamos nuestros sistemas de
                                                adquisición
                                                de datos con cualquier ERP del cliente, incluyendo <strong>SAP,
                                                    NAVISION,
                                                    ORACLE</strong>, entre otros, facilitando la gestión eficiente de la
                                                información y mejorando la toma de decisiones en tiempo real.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Colaboraciones Contractuales:</strong> Actualmente, disponemos
                                                de
                                                colaboraciones contractuales con empresas del sector de pesaje y
                                                certificadoras como <a href="https://www.minebea-intec.com/es/"
                                                    target="_blank">Minebea Intec</a>, <a
                                                    href="https://www.diniargeo.com/" target="_blank">Dini Argeo</a>, <a
                                                    href="https://www.applus.com/global/es/" target="_blank">Applus+</a>
                                                y <a href="https://www.ricelake.com/es/" target="_blank">Rice Lake</a>.
                                                Mantenemos excelentes relaciones con toda su red de partners,
                                                lo que nos permite ofrecer soluciones de alto nivel respaldadas por
                                                tecnologías de vanguardia.
                                            </p>
                                        </li>
                                    </ul>
                                    <h2 id="experience" data-scrollspy-target>Nuestra Experiencia y Capacidad Tecnológica
                                    </h2>

                                    <p>
                                        Además de nuestra especialización en visión artificial a través de la
                                        colaboración de la UPC, nuestra preparación nos permite abordar proyectos
                                        de múltiples disciplinas, ofreciendo soluciones innovadoras en diferentes
                                        ámbitos tecnológicos e industriales. En definitiva, nos adaptamos a cada una
                                        de las necesidades de nuestros clientes, asegurando un enfoque
                                        personalizado y eficiente en cada proyecto.
                                    </p>

                                    <h2 id="project" data-scrollspy-target>Proyecto Destacado: Visión Artificial en
                                        Lonjas de Cataluña para
                                        Identificación de Capturas de Pescado</h2>

                                    <p>
                                        Un ejemplo reciente de nuestra capacidad de innovación es el Sistema de
                                        <strong>Conteo Automático de Pescado en Lonjas</strong>, desarrollado para
                                        diferentes
                                        cofradías de pescadores. Este proyecto tiene como objetivo optimizar el
                                        control de producción mediante:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                <strong>Visión por Computador</strong>, utilizando cámaras y algoritmos
                                                de IA para
                                                contar las unidades de peces, calamares y otros en tiempo real.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Sensores e IoT</strong>, para mejorar la precisión de los datos
                                                recolectados.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Interfaz de Gestión Digital</strong>, para el monitoreo y
                                                análisis de la
                                                producción en tiempo real.
                                            </p>
                                        </li>
                                    </ul>

                                    <p>Este desarrollo permite una gestión más eficiente, reduciendo errores
                                        humanos y mejorando la toma de decisiones.</p>

                                    <p>Como ejemplos de transferencia de esta innovación destacamos el proyecto
                                        iCalpez, que permitió implementar un sistema operativo para establecer el
                                        número de ejemplares de especies tan complejas como la gamba blanca, la
                                        sepia o el pulpo, o el proyecto DigiPesca, para impulsar la Digitalización del
                                        sector pesquero en el Mediterráneo, a partir de distinta tecnología como la
                                        aplicación de la Inteligencia Artificial (AI) o el internet de la Cosas (IoT).
                                    </p>

                                    <h2 id="links" data-scrollspy-target>
                                        Proyecto Destacado de Visión Artificial
                                    </h2>

                                    <ul class="enlaces-lista">
                                        <li><a href="https://www.programapleamar.es/entrevistas/vicenc-parisi-director-del-proyecto-icalpez-el-sistema-disenado-es-capaz-de"
                                                target="_blank">Entrevista a Vicenç Parisi - iCalpez</a></li>
                                        <li><a href="https://www.azken.com/blog/caso-de-uso-upc-aplicacion-de-vision-por-computadora-para-la-clasificacion-por-calibres-de-las-especies-pesqueras-a-traves-de-deep-learning/"
                                                target="_blank">Caso de uso UPC - Clasificación por calibres</a></li>
                                        <li><a href="https://digipesca.webs.upv.es/" target="_blank">Proyecto
                                                Digipesca</a>
                                        </li>
                                    </ul>

                                    <p>
                                        Nuestra combinación de experiencia, innovación y colaboraciones
                                        estratégicas nos permite seguir creciendo y ofreciendo soluciones
                                        tecnológicas avanzadas en el sector del pesaje industrial.
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
                                        <HashLink :to="{ hash: '#history' }"
                                            class="text-gray-700 hover:text-gray-900">Nuestra Historia</HashLink>
                                    </li>
                                    <li>
                                        <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                                        <HashLink :to="{ hash: '#evolution' }"
                                            class="text-gray-700 hover:text-gray-900">Creación de Dastions</HashLink>
                                    </li>
                                    <li>
                                        <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                                        <HashLink :to="{ hash: '#innovation' }"
                                            class="text-gray-700 hover:text-gray-900">Innovación y Colaboraciones
                                            Estratégicas</HashLink>
                                    </li>
                                    <li>
                                        <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                                        <HashLink :to="{ hash: '#experience' }"
                                            class="text-gray-700 hover:text-gray-900">Nuestra Experiencia y Capacidad
                                            Tecnológica</HashLink>
                                    </li>
                                    <li>
                                        <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                                        <HashLink :to="{ hash: '#project' }"
                                            class="text-gray-700 hover:text-gray-900">Proyecto Destacado</HashLink>
                                    </li>
                                    <li>
                                        <!-- The data-scrollspy-link attribute makes the scrollspy work -->
                                        <HashLink :to="{ hash: '#links' }"
                                            class="text-gray-700 hover:text-gray-900">Links</HashLink>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>

        </main>

    </div>
</template>