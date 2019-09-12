<template>
  <div class="main-component">
    <main-nav />

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
import Navbar from '~/components/Navbar'

export default {
  components: {
    'main-nav': Navbar
  },

  methods: {
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
  background: var(--dark);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.5);
}
</style>
