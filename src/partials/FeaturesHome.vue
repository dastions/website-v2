<template>
  <section class="relative">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" aria-hidden="true">
      <div class="w-80 h-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]"></div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-24 md:pb-20">
          <h2 class="text-3xl md:text-4xl font-bold">Escuchamos y trabajamos con el cliente.</h2>
          <p class="text-lg text-gray-700">Nuestro nivel de exigencia es mayor cada día, comprometiéndonos con los retos de nuestros clientes y de sus trabajadores en campo, y ofreciendo soluciones de ingeniería a sus principales necesidades.</p>
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
              class="text-gray-500 font-mono [&_span]:opacity-0 text-sm blur-xs will-change-[filter] group-hover:blur-none transition duration-300">
              <span class="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span
                class="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br>
              <span class="animate-[code-3_10s_infinite]">--scope=@phanatic</span> <span
                class="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br><br>
              <span class="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br>
              <span class="animate-[code-6_10s_infinite]">Package published.</span>
            </div>
          </div>
          <div class="absolute top-16">
            <div
              class="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 pointer-events-none mb-[7%]">
              <img class="-rotate-2" src="../images/features-02-overlay-01.png" width="500" height="72" alt="Overlay 01">
            </div>
            <div
              class="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 delay-50 pointer-events-none mb-[3.5%]">
              <img class="rounded-full mx-auto" src="../images/repsol.jpg" width="40" height="40" alt="Overlay 02">
            </div>
            <div
              class="translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition duration-300 delay-100 pointer-events-none">
              <img class="-rotate-1" src="../images/features-02-overlay-03.png" width="500" height="91" alt="Overlay 03">
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div
          class="grid lg:grid-cols-3 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] *:p-6 md:*:px-10 md:*:py-12 *:relative *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-inline-start:-1px] *:before:[inset-block-start:0]">
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
              <span>Consultoría a medida</span>
            </h3>
            <p class="text-[15px] text-gray-700">Soluciones adaptables, escalables y capaces de adecuarse muy fácilmente a la filosofía y a tus procesos de negocio, ahora y en cualquier momento de su evolución.</p>
          </article>
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
              <span>Personal cualificado</span>
            </h3>
            <p class="text-[15px] text-gray-700">Trabajamos con profesionales y marcas de confianza para garantizar el buen resultado de todos nuestros proyectos.</p>
          </article>
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>
              <span>Mejora Continua</span>
            </h3>
            <p class="text-[15px] text-gray-700">Servicio post-venta y Soporte técnico escuchamos sus necesidades y le dotamos de las herramientas necesarias para dar solución a sus necesidades.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>