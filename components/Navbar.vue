<template>
  <header>
    <nav>
      <span
        v-if="$route.name === 'Repository'"
        class="go-back"
        @click="$router.back()"
      >
        <i class="fas fa-arrow-left"></i>
      </span>
      <div class="row title">
        <div class="col-12 d-flex text-center">
          <a
            href="https://github.com/globocom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="32"
              class="octicon octicon-mark-github text-white"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <h1 v-if="$route.name === 'Home'" class="m-0">
            Lista de repositórios - globocom
          </h1>
          <h1 v-if="$route.name === 'Repository'" class="m-0">
            globocom/{{ $route.params.name }}
          </h1>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  z-index: 999;

  nav {
    position: relative;
    width: 100%;

    .go-back {
      position: absolute;
      left: 20px;
      top: 5px;
      font-size: 20px;
      line-height: 1;
      z-index: 999;

      i {
        color: var(--dark);
      }
    }

    .title {
      .col-12 {
        justify-content: center;

        a {
          margin-right: 10px;
        }
        h1 {
          font-family: 'Roboto', sans-serif;
          font-size: 26px;
        }
      }
    }
  }
}
</style>
