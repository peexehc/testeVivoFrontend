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
</style>
