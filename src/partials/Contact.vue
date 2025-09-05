<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-26 pb-12 md:pb-20">
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
              <form id="contact-form" class="space-y-4" @submit.prevent="sendMail">
                <input type="text" placeholder="Nombre / Empresa" v-model="name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="name" id="name" required />

                <input type="email" placeholder="Su correo electrónico" v-model="email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="email" id="email" required />

                <input type="text" placeholder="Asunto" v-model="subject"
                  class="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-dastions-primary focus:outline-none"
                  name="subject" id="subject" required />

                <textarea rows="4" placeholder="Mensaje" v-model="message"
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

    <!-- Social Media Banner -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center shadow-xl">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-6">
          Síguenos en Redes Sociales
        </h3>
        <p class="text-blue-100 mb-8 text-lg">
          Mantente conectado con nosotros para las últimas noticias y actualizaciones
        </p>
        
        <div class="flex justify-center items-center gap-6 flex-wrap">
          <!-- GitHub -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-blue-200 transition-colors group" 
             href="https://github.com/dastions" target="_blank" aria-label="Github">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <svg height="24" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path clip-rule="evenodd" d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" fill="currentColor" fill-rule="evenodd"/>
              </svg>
            </div>
            <span class="text-sm font-medium">GitHub</span>
          </a>

          <!-- WhatsApp -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-green-300 transition-colors group" 
             href="https://api.whatsapp.com/send?phone=34620717157" target="_blank" aria-label="Whatsapp">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <svg height="24" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="WhatsApp-Logo-Icon">
                  <path d="M116.225,-0.001c-11.264,0.512 -26.112,1.536 -32.768,3.072c-10.24,2.048 -19.968,5.12 -27.648,9.216c-9.728,4.608 -17.92,10.752 -25.088,17.92c-7.68,7.68 -13.824,15.872 -18.432,25.6c-4.096,7.68 -7.168,17.408 -9.216,27.648c-1.536,6.656 -2.56,21.504 -2.56,32.768c-0.512,4.608 -0.512,10.752 -0.512,13.824l0,251.905l0,13.824c0.512,11.264 1.536,26.112 3.072,32.768c2.048,10.24 5.12,19.968 9.216,27.648c4.608,9.728 10.752,17.92 17.92,25.088c7.68,7.68 15.872,13.824 25.6,18.432c7.68,4.096 17.408,7.168 27.648,9.216c6.656,1.536 21.504,2.56 32.768,2.56c4.608,0.512 10.752,0.512 13.824,0.512l251.904,0l13.824,0c11.264,-0.512 26.112,-1.536 32.768,-3.072c10.24,-2.048 19.968,-5.12 27.648,-9.216c9.728,-4.608 17.92,-10.752 25.088,-17.92c7.68,-7.68 13.824,-15.872 18.432,-25.6c4.096,-7.68 7.168,-17.408 9.216,-27.648c1.536,-6.656 2.56,-21.504 2.56,-32.768c0.512,-4.608 0.512,-10.752 0.512,-13.824l0,-265.729c-0.512,-11.264 -1.536,-26.112 -3.072,-32.768c-2.048,-10.24 -5.12,-19.968 -9.216,-27.648c-4.608,-9.728 -10.752,-17.92 -17.92,-25.088c-7.68,-7.68 -15.872,-13.824 -25.6,-18.432c-7.68,-4.096 -17.408,-7.168 -27.648,-9.216c-6.656,-1.536 -21.504,-2.56 -32.768,-2.56c-4.608,-0.512 -10.752,-0.512 -13.824,-0.512l-265.728,0Z" style="fill:url(#_Linear1);fill-rule:nonzero;"/>
                  <path d="M344.754,289.698c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325m-83.207,113.573l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645m129.102,-280.709c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076" style="fill:#fff;"/>
                </g>
                <defs>
                  <linearGradient gradientTransform="matrix(0,-512,-512,0,256.001,512)" gradientUnits="userSpaceOnUse" id="_Linear1" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" style="stop-color:#25cf43;stop-opacity:1"/>
                    <stop offset="1" style="stop-color:#61fd7d;stop-opacity:1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="text-sm font-medium">WhatsApp</span>
          </a>

          <!-- LinkedIn -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-blue-300 transition-colors group" 
             href="https://www.linkedin.com/company/dastions/" target="_blank" aria-label="Linkedin">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <svg height="24" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="g5891">
                  <path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" id="background" style="fill:#2867b2;"/>
                  <g id="shapes">
                    <rect height="257.962" id="rect11" style="fill:#fff;" width="85.76" x="61.053" y="178.667"/>
                    <path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" id="path13-0" style="fill:#fff;fill-rule:nonzero;"/>
                    <path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" id="path15" style="fill:#fff;fill-rule:nonzero;"/>
                  </g>
                </g>
              </svg>
            </div>
            <span class="text-sm font-medium">LinkedIn</span>
          </a>

          <!-- Email -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-blue-300 transition-colors group" 
             href="mailto:info@dastions.com" aria-label="Email">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <svg height="24" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="_x37_4-outlook">
                  <g>
                    <g>
                      <path d="M479.689,121.431H270.912c-8.23,0-14.91,6.705-14.91,14.958c0,8.251,6.68,14.95,14.91,14.95     h165.322l-91.621,71.447l-65.709-41.901L262.92,206.13l74.559,47.548c2.418,1.56,5.221,2.332,7.996,2.332     c3.221,0,6.473-1.045,9.16-3.14l110.143-85.924v193.736H270.912c-8.23,0-14.91,6.699-14.91,14.946     c0,8.257,6.68,14.959,14.91,14.959h208.777c8.234,0,14.914-6.702,14.914-14.959v-239.24     C494.604,128.136,487.924,121.431,479.689,121.431L479.689,121.431z M479.689,121.431" style="fill:#1B80E4;"/>
                      <path d="M280.428,35.153c-3.404-2.841-7.967-4.069-12.26-3.168L29.566,76.84     c-7.068,1.322-12.169,7.481-12.169,14.687v328.966c0,7.177,5.101,13.364,12.169,14.688l238.602,44.856     c0.893,0.177,1.818,0.271,2.744,0.271c3.459,0,6.828-1.199,9.516-3.445c3.432-2.836,5.393-7.083,5.393-11.512V46.671     C285.82,42.213,283.859,37.995,280.428,35.153L280.428,35.153z M280.428,35.153" style="fill:#2299F8;"/>
                      <path d="M151.609,360.683c-41.1,0-74.563-40.253-74.563-89.72c0-49.462,33.464-89.719,74.563-89.719     c41.1,0,74.565,40.257,74.565,89.719C226.174,320.43,192.709,360.683,151.609,360.683L151.609,360.683z M151.609,211.153     c-24.665,0-44.736,26.824-44.736,59.81c0,32.988,20.071,59.813,44.736,59.813c24.666,0,44.743-26.824,44.743-59.813     C196.352,237.978,176.275,211.153,151.609,211.153L151.609,211.153z M151.609,211.153" style="fill:#FCFCFC;"/>
                    </g>
                  </g>
                </g>
                <g id="Layer_1"/>
              </svg>
            </div>
            <span class="text-sm font-medium">Email</span>
          </a>

          <!-- YouTube -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-red-300 transition-colors group" 
             href="https://www.youtube.com/@dastions" target="_blank" aria-label="Youtube">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <svg height="24" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                  <path d="M501.299,132.766c-5.888,-22.03 -23.234,-39.377 -45.264,-45.264c-39.932,-10.701 -200.037,-10.701 -200.037,-10.701c0,0 -160.105,0 -200.038,10.701c-22.025,5.887 -39.376,23.234 -45.264,45.264c-10.696,39.928 -10.696,123.236 -10.696,123.236c0,0 0,83.308 10.696,123.232c5.888,22.03 23.239,39.381 45.264,45.268c39.933,10.697 200.038,10.697 200.038,10.697c0,0 160.105,0 200.037,-10.697c22.03,-5.887 39.376,-23.238 45.264,-45.268c10.701,-39.924 10.701,-123.232 10.701,-123.232c0,0 0,-83.308 -10.701,-123.236Z" style="fill:#ed1f24;fill-rule:nonzero;"/>
                  <path d="M204.796,332.803l133.018,-76.801l-133.018,-76.801l0,153.602Z" style="fill:#fff;fill-rule:nonzero;"/>
                </g>
              </svg>
            </div>
            <span class="text-sm font-medium">YouTube</span>
          </a>

          <!-- Linktree -->
          <a class="flex flex-col items-center gap-2 text-white hover:text-green-300 transition-colors group" 
             href="https://linktr.ee/dastions" target="_blank" aria-label="Linktree">
            <div class="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
              <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b48ad59add9f2777bb76f_download-2.svg" alt="Linktree" width="24" height="24" />
            </div>
            <span class="text-sm font-medium">Linktree</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

function sendMail() {
  const mailto = `mailto:tienda@dastions.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent('Nombre/Empresa: ' + name.value + '\nEmail: ' + email.value + '\n\n' + message.value)}`;
  window.open(mailto, '_blank');
}
</script>
