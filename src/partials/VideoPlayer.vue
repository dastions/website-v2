<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    default: ''
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  loop: {
    type: Boolean,
    default: false
  },
  muted: {
    type: Boolean,
    default: true
  },
  controls: {
    type: Boolean,
    default: false
  },
  playsinline: {
    type: Boolean,
    default: true
  },
  preload: {
    type: String,
    default: 'metadata',
    validator: (value) => ['none', 'metadata', 'auto'].includes(value)
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  className: {
    type: String,
    default: 'w-full h-auto object-cover rounded-lg shadow-lg'
  }
})

// Generate a default poster if none provided
const defaultPoster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3EVideo Loading...%3C/text%3E%3C/svg%3E"
</script>

<template>
  <video 
    :autoplay="props.autoplay"
    :loop="props.loop"
    :muted="props.muted"
    :controls="props.controls"
    :playsinline="props.playsinline"
    :preload="props.preload"
    :poster="props.poster || defaultPoster"
    :width="props.width"
    :height="props.height"
    :class="props.className"
    @loadstart="console.log('Video loading started')"
    @canplay="console.log('Video can start playing')"
    @error="console.error('Video loading error')">
    
    <!-- Multiple source formats for better browser compatibility -->
    <source :src="props.src" type="video/mp4">
    <source :src="props.src.replace('.mp4', '.webm')" type="video/webm">
    <source :src="props.src.replace('.mp4', '.ogg')" type="video/ogg">
    
    <!-- Fallback message -->
    <p class="text-gray-600 text-center p-4">
      Tu navegador no soporta la reproducción de este video. 
      <a :href="props.src" class="text-blue-600 hover:text-blue-800 underline" download>
        Descargar video
      </a>
    </p>
  </video>
</template>

<style scoped>
video {
  max-width: 100%;
  height: auto;
}

video::-webkit-media-controls {
  display: flex;
}

video::-webkit-media-controls-panel {
  background-color: rgba(0, 0, 0, 0.7);
}

video::-webkit-media-controls-play-button {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}
</style>
