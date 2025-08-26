<script setup>
import Testimonial from '../partials/Testimonial.vue'
import Customer1 from '../images/customer1.jpg'
import Customer2 from '../images/customer2.jpg'
import Customer3 from '../images/customer3.jpg'
import Customer4 from '../images/customer4.jpg'
import Customer5 from '../images/customer5.jpg'
import Customer6 from '../images/customer6.jpg'
import Customer7 from '../images/customer7.jpg'
import Customer8 from '../images/customer8.jpg'


const testimonials = [
  {
    img: Customer2,
    content: "Estamos trabajando con Dastions para conectar más equipos de Minebea.",
    name: 'España',
    company: 'Minebea Intec'
  },
  {
    img: Customer4,
    content: 'Aquí en UK la conexión del software a nuestras máquinas nos ha facilitado la vida al departamento de Calidad.',
    name: 'Rosana ',
    company: 'UK Fruits'
  },
  {
    img: Customer1,
    content: 'Este software me ha dado herramientas comerciales para ganar ofertas en muchos clientes.',
    name: 'José Manuel',
    company: 'Pack Spain'
  },
  {
    img: Customer6,
    content: 'Es facilísimo hablar con Dastions para cualquier necesidad que te facilite la vida.',
    name: 'Anna Prats',
    company: 'Cloud Inc'
  },
    {
    img: Customer5,
    content: 'Dastions nos da soluciones personalizas de software para cumplir con las necesidades del cliente.',
    name: 'Antonio',
    company: 'Cotec'
  },
    {
    img: Customer7,
    content: 'He conectado Detectores de Metales y Pesadoras en Continuo de 3 marcas distintas en 1 solo aplicativo.',
    name: 'Veerle Larson',
    company: 'Prinso'
  },
    {
    img: Customer3,
    content: 'Se han conectado varias Pesadoras Dinámicas y estamos contentos con el resultado.',
    name: 'Fruit SL',
    company: 'Checkweigher'
  },
    {
    img: Customer8,
    content: 'Auditorías pasadas con éxito y clientes contentos.',
    name: 'Ana Kennedy',
    company: 'Syntax Inc'
  }
]
</script>

<template>
  <section
    class="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-linear-to-b before:from-gray-100 before:-z-10">
    <div class="pt-12 md:pt-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold">Trabajan con Nosotros</h2>
        </div>
      </div>
      <div class="relative flex justify-center max-w-[94rem] mx-auto">
        <div class="absolute bottom-20 -translate-x-36 -z-10" aria-hidden="true">
          <div
            class="w-80 h-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]">
          </div>
        </div>
        <div class="absolute -bottom-10 -z-10" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]"></div>
        </div>
        <div class="absolute bottom-0 -z-10" aria-hidden="true">
          <div class="w-56 h-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]"></div>
        </div>
        <!-- Row -->
        <div
          class="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] py-12 md:py-20 group">
          <div
            class="flex items-start justify-center md:justify-start *:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            <!-- Items -->
            <Testimonial v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"
              class="w-[22rem] group-hover:rotate-0 transition-transform duration-300">
              {{ testimonial.content }}
            </Testimonial>
          </div>
          <!-- Duplicated element for infinite scroll -->
          <div
            class="flex items-start justify-center md:justify-start *:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
            aria-hidden="true">
            <!-- Items -->
            <Testimonial v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"
              class="w-[22rem] group-hover:rotate-0 transition-transform duration-300">
              {{ testimonial.content }}
            </Testimonial>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>