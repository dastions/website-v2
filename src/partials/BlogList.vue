<script setup>
import PageIllustration from "./PageIllustration.vue"
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

function getImageUrl(path) {
  return new URL(path, import.meta.url).href;
}

const posts = [
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Mar 21, 2024",
    category: "Productos",
    title: "Comprar Rayos X",
    subtitle: "¿Qué debo tener en cuenta a la hora de comprar un detector de Rayos X? Al considerar la compra de un detector de rayos X para tu fábrica, es importante tener en cuenta varios factores para asegurarte de que el equipo seleccionado satisfaga las necesidades específicas de tu negocio.",
    title_link: "/blog/detectores-de-rayos-x-alimentarios",
    read_more_link: "/blog/detectores-de-rayos-x-alimentarios"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Mar 20, 2024",
    category: "Productos",
    title: "Detectores de Rayos X Alimentarios",
    subtitle: "¿Por qué debo instalar un detector de rayos X en mi fábrica? Instalar un detector de rayos X en tu fábrica puede ofrecer una serie de ventajas significativas, especialmente en la industria alimentaria, donde la seguridad y la calidad son de suma importancia.",
    title_link: "/blog/detector-rayos-x",
    read_more_link: "/blog/detector-rayos-x"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Ene 1, 2024",
    category: "Software",
    title: "Software de Recogida de Datos",
    subtitle: "Catálogo Online Conecta fácilmente tus equipos y empieza a tomar el control de tu planta de producción.",
    title_link: "/blog/data-collection",
    read_more_link: "/blog/data-collection"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Ene 1, 2024",
    category: "Software",
    title: "Sector Portuario",
    subtitle: "Software de Control de Pesaje en el Sector Portuario, con Identificación de Matrículas y Expedicion de Documentos.",
    title_link: "/blog/sector-portuario",
    read_more_link: "/blog/sector-portuario"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Dic 12, 2023",
    category: "Software",
    title: "Control de Accesos",
    subtitle: "Software de Control de Accesos, con Cámaras de Léctura de Matrículas y Terminales de Pago y Ticketing.",
    title_link: "/blog/access-control",
    read_more_link: "/blog/access-control"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Dic 11, 2023",
    category: "Software",
    title: "Sistema de Pesaje Automático",
    subtitle: "Sistemas funcionando con más de 1.500 camiones / día. Optimice su Operación de Pesaje con Nuestro Software de Automatización: Conexión Digital y Sincronización con ERP SAP.",
    title_link: "/blog/pesaje-automatico",
    read_more_link: "/blog/pesaje-automatico"
  },
  {
    author: "Albert Mauri Guiu",
    author_image: "../images/albert.jpg",
    post_date: "Sept 1, 2025",
    category: "Software",
    title: "Monitorización Remota DASTIONS NetGuard",
    subtitle: "Sistema avanzado de monitorización remota de sensores, diseñado para sectores como la industria del pesaje, la agricultura, la construcción, el sector químico y las infraestructuras portuarias.",
    title_link: "/blog/monitorizacion-remota",
    read_more_link: "/blog/monitorizacion-remota"
  }
];

const visiblePosts = ref(5)
const selectedCategory = ref('All')
const categories = ['All', 'Entrevistas', 'Software', 'Productos']
const route = useRoute()
const router = useRouter()

selectedCategory.value = route.query.category || 'All'

function showMorePosts() {
  visiblePosts.value = Math.min(visiblePosts.value + 5, posts.length)
}

function setCategory(category) {
  selectedCategory.value = category
  visiblePosts.value = 5
  router.replace({ query: { ...route.query, category: category !== 'All' ? category : undefined } })
}

watch(() => route.query.category, (newCat) => {
  selectedCategory.value = newCat || 'All'
  visiblePosts.value = 5
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') return posts
  return posts.filter(post => post.category === selectedCategory.value)
})
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-26 md:pb-20">

        <!-- Section header -->
        <div class="pb-16">
          <h1 class="text-5xl font-bold mb-4">Dastions News</h1>
          <p class="text-lg text-gray-700">Contenido para desarrolladores, productos y expertos digitales.</p>
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="setCategory(cat)"
            :class="cat === selectedCategory ? 'btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm' : 'btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow-sm'"
          >{{ cat }}</button>
        </div>

        <!-- Articles -->
        <div
          class="space-y-10 border-l [border-image:linear-gradient(to_bottom,var(--color-slate-200),var(--color-slate-300),transparent)1]">
          <article v-for="(post, idx) in filteredPosts.slice(0, visiblePosts)" :key="idx" class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" :src="getImageUrl(post.author_image)" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">{{ post.author }}</div>
                <span v-if="post.post_date" class="text-gray-700 text-sm">{{ post.post_date }}</span>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" :to="post.title_link">{{ post.title }}</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              {{ post.subtitle }}
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                :to="post.read_more_link">Leer más <span
                  class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
        </div>

        <!-- Load more -->
        <div class="text-center mt-12">
          <button v-if="visiblePosts < posts.length" @click="showMorePosts" class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]">Cargar más
            <span class="tracking-normal text-gray-500 ml-2">↓</span></button>
        </div>

      </div>

    </div>
  </section>
</template>