<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="rounded-2xl relative overflow-hidden shadow-xl before:absolute before:inset-0 before:rounded-2xl before:bg-gray-900 before:pointer-events-none before:-z-10"
        data-aos="zoom-y-out">

        <!-- Glow -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10" aria-hidden="true">
          <div class="w-[480px] h-56 rounded-full border-[20px] border-blue-500 blur-3xl will-change-[filter]"></div>
        </div>

        <!-- Stripes illustration -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10" aria-hidden="true">
          <img class="max-w-none" src="../images/stripes-dark.svg" width="768" height="432" alt="Stripes" />
        </div>

        <!-- Contenido en dos columnas -->
        <div class="py-12 md:py-10 px-4 md:px-12">

          <!-- Título -->
          <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Contacta
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Columna 1: Información de contacto -->
            <div class="rounded-2xl p-6 text-white shadow-lg">
              <h2 class="text-2xl md:text-2xl font-bold text-white mb-2">© Dastions.com</h2>
              <p class="mb-4"> Digital Application Solutions S.L. </p>
              <ul class="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/company/dastions/" target="_blank"
                    class="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <i class="ti-linkedin text-xl"></i>
                    <span>Tarragona, Catalonia, Spain (LinkedIn)</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dastions.com"
                    class="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <i class="ti-email text-xl"></i>
                    <span>info@dastions.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <i class="ti-mobile text-xl"></i>
                    <span>+34 977 13 · 12 · 06</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/34620717157" target="_blank"
                    class="flex items-center gap-3 hover:text-green-400 transition-colors">
                    <i class="ti-themify-favicon text-xl"></i>
                    <span>Contactar por WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Columna 2: Formulario -->
            <div class=" rounded-2xl p-6 text-white shadow-lg">
              <form id="contact-form" class="space-y-4">
                <input type="text" placeholder="Nombre / Empresa"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="name" id="name" required />

                <input type="email" placeholder="Su correo electrónico"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="email" id="email" required />

                <input type="text" placeholder="Asunto"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="subject" id="subject" required />

                <textarea rows="4" placeholder="Mensaje"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="message" id="message" required></textarea>

                <button type="submit" id="contact-submit"
                  class="w-full py-3 px-6 bg-dastions-primary hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors">
                  Contactar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
