<template>
  <div class="main-component">
    <div class="content">
      <!-- Router-view -->
      <transition name="fade" mode="out-in">
        <nuxt :key="$route.fullPath" />
      </transition>

      <!-- App install -->
      <div id="appInstall" notify="false">
        <div id="closeAppInstall" class="close-btn" @click="closeInstall()">
          <i class="fas fa-times"></i>
        </div>

        <p class="m-0">
          Adicione <b>Teste Vivo Frontend</b> à sua tela inicial
        </p>

        <div class="download">
          <button id="btnInstall">
            Instalar app
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      // Object to get the inner width and height of the screen
      window: {
        width: 0,
        height: 0
      }
    }
  },

  created() {
    if (process.browser) {
      // Retrieve the inner width and height of the screen
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.handleResize)

      setTimeout(() => {
        // Trigger function
        this.handleResize()
      }, 10)
    }
  },

  mounted() {
    //
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight

      this.updateSize(this.window)
    },

    ...mapActions({
      updateSize: 'window/updateSize'
    }),

    closeInstall() {
      const el = document.getElementById('appInstall')

      el.style.display = 'none'
    }
  }
}
</script>

<style lang="scss">
html {
  overflow-x: hidden;
}
html,
body {
  height: 100%;
  width: 100%;
  background-color: white;
}
.main-component {
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: auto;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 0px;
  border-radius: 0px;
  background: white;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0px;
  border-radius: 5px;
  background: white;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.5);
}
</style>
