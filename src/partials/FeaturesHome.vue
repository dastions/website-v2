<template>
  <section class="relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" aria-hidden="true">
      <div
        class="w-80 h-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]">
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-24 md:pb-20">
          <h1
            class="text-5xl md:text-5xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
            Agente IA Industrial<br class="max-lg:hidden" /> Logística y Pesaje de Camiones</h1> 
          <p class="text-lg text-gray-700 mt-4">Nuestro agente conecta y gestiona múltiples básculas, agiliza los
            procesos de pesaje y asiste a conductores y operarios con guía por voz en tiempo real.</p>
        </div>

        <!-- Illustration -->
        <div class="group relative w-full max-w-[500px] mx-auto flex justify-center mb-32 md:mb-28"
          data-aos="zoom-y-out">
          <div class="absolute bottom-0 -z-10" aria-hidden="true">
            <div class="w-80 h-80 rounded-full bg-blue-500 opacity-70 blur-[160px] will-change-[filter]"></div>
          </div>
          <div
            class="w-full aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl -rotate-1 group-hover:-rotate-0 transition duration-300">
            <div
              class="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
              <span class="text-white font-medium text-[13px]">AI Project</span>
            </div>
            <div
              class="text-gray-500 font-mono [&_span]:opacity-0 text-sm will-change-[filter] group-hover:blur-none transition duration-300">
              <span class="text-gray-200 animate-[code-1_10s_infinite]">IA Agent: Activando báscula...</span> <span
                class="animate-[code-2_10s_infinite]">Conectando camión #A23</span><br>
              <span class="animate-[code-3_10s_infinite]">Pesaje completado: 32.450 kg</span> <span
                class="animate-[code-4_10s_infinite]">Datos enviados a ERP</span><br><br>
              <span class="text-gray-200 animate-[code-5_10s_infinite]">Asistente de voz: "Siguiente camión, por favor"</span><br>
              <span class="animate-[code-6_10s_infinite]">Análisis predictivo: Sin incidencias</span>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div
          class="grid lg:grid-cols-3 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] *:p-6 md:*:px-10 md:*:py-12 *:relative *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-inline-start:-1px] *:before:[inset-block-start:0]">
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 lucide lucide-app-window-icon lucide-app-window"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
              <span>Plataforma todo-en-uno</span>
            </h3>
            <p class="text-[15px] text-gray-700">Automatización y gestión inteligente para pesaje industrial y
              logística. Integración total con sistemas ERP y gestión de transporte.</p>
          </article>
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-blue-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              <span>Agente de Voz IA especializado</span>
            </h3>
            <p class="text-[15px] text-gray-700">Asistente de voz para básculas y operaciones logísticas, con recogida
              de datos en tiempo real y analítica predictiva.</p>
          </article>
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              <span>Despliegue rápido </span>
            </h3>
            <p class="text-[15px] text-gray-700">Soluciones escalables, implantación ágil y acompañamiento experto en
              todo el proceso.</p>
          </article>
        </div>
        <div class="text-center mt-10">
            <router-link
              class="btn text-white bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group"
              to="/contact">
              <span class="relative inline-flex items-center">
                Solicitar Presupuesto
                <span
                  class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
              </span>
            </router-link>
          <p class="text-gray-600 mt-4">Contáctanos y descubre cómo nuestras soluciones pueden transformar tu negocio
          </p>
        </div>
      </div>
    </div>
  </section>
</template>