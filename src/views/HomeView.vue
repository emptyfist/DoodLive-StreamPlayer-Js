<template>
  <div class="home">
    <vue3-video-player :core="HLSCore" :src="src" title="Streaming Video">
    </vue3-video-player>
  </div>
</template>

<script>
import HLSCore from '@cloudgeek/playcore-hls'

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      HLSCore,
      src: "https://stream.mux.com/AHtNUiG600zlYSjecA5Nnp6OPitww802KLUnX023WnL118.m3u8"
    }
  }
}
</script>
