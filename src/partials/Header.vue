<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropdown from './Dropdown.vue'

const mobileNavOpen = ref(false)
const mobileNav = ref(null)
const hamburger = ref(null)

const clickOutside = (e) => {
  if (!mobileNavOpen.value || mobileNav.value.contains(e.target) || hamburger.value.contains(e.target)) return
  mobileNavOpen.value = false
}

const keyPress = ({ keyCode }) => {
  if (!mobileNavOpen.value || keyCode !== 27) return
  mobileNavOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('keydown', keyPress)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('keydown', keyPress)
})
</script>

<template>
  <header class="fixed w-full z-30">
    <div class="">
      <div
        class="relative flex items-center justify-between gap-3 h-16 px-3 backdrop-blur-xs bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

        <!-- Site branding -->
        <div class="flex-1 flex items-center">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="Dastions">
            <!-- TODO: Image responsive fix -->
            <img src="/src/images/dastions-ariba.png" width="126" height="126" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8">
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/">Inicio</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/products">Productos</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/services">Servicios</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/blog">Blog</router-link>
            </li>
          </ul>

        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end ">
          <li>
            <a data-scrollspy-link href="#contact-form"
              class="btn !text-white px-6 py-2 rounded-lg text-lg font-semibold bg-dastions-primary hover:bg-dastions-secondary shadow-sm w-full mb-4 sm:w-auto sm:mb-0 group">
              Contáctanos
            </a>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
            ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="fill-current pointer-events-none" width="16" height="16" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0"
                y="7" x="7" width="9" height="2" rx="1"></rect>
              <rect
                class="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
                y="7" width="9" height="2" rx="1"></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <Transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <nav id="mobile-nav" ref="mobileNav" v-show="mobileNavOpen"
              class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
              <ul class="text-sm p-2">
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    to="/">Inicio</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    to="/products">Productos</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    to="/services">Servicios</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2"
                    to="/blog">Blog</router-link>
                </li>
              </ul>
            </nav>
          </Transition>

        </div>

      </div>
    </div>
  </header>
</template>
