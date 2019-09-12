<template>
  <section id="respositoryInfo">
    <div class="container-fluid wrap">
      <div class="row repo">
        <div class="col-12 infos text-center">
          <p class="info m-0">
            <span class="stars">
              <i class="fas fa-star"></i>{{ repositoryInfo.stargazers_count }}
            </span>
            <span class="forks">
              <i class="fas fa-code-branch"></i>{{ repositoryInfo.forks_count }}
            </span>
            <span class="language">
              {{ repositoryInfo.language }}
            </span>
          </p>
        </div>
      </div>

      <div class="row commits">
        <div class="col-12 text-center">
          <h3 class="m-0">Commits</h3>
        </div>
      </div>

      <div v-for="commit in commits" :key="commit.node_id" class="row commit">
        <div class="col-12 text-center">
          <a :href="commit.html_url" target="_blank" rel="noopener noreferrer">
            <p class="mb-1 message">{{ commit.commit.message }}</p>
            <p class="m-0 author">Autor: {{ commit.commit.author.name }}</p>
          </a>
        </div>
      </div>

      <div v-if="loading" class="row loading">
        <div class="col-12 text-center"></div>
      </div>

      <footer>
        <nav>
          <button v-if="!lastPage && !loading" @click="loadMore()">
            Carregar mais
          </button>
          <img
            v-else-if="loading"
            src="/img/loading.svg"
            height="30"
            alt="Carregando"
          />
          <button v-else disabled="disabled">Fim dos commits</button>
        </nav>
      </footer>
    </div>
  </section>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      repositoryInfo: [],
      commits: [],
      nextPage: 2,
      lastPage: false,
      loading: false
    }
  },

  async asyncData({ $axios, params }) {
    const data = await $axios.$get(
      `https://api.github.com/repos/globocom/${params.name}`
    )

    const commits = await $axios.$get(
      `https://api.github.com/repos/globocom/${params.name}/commits`,
      {
        params: { page: 1, per_page: 20 }
      }
    )

    return { repositoryInfo: data, commits: commits }
  },

  methods: {
    loadMore() {
      this.loading = true

      axios
        .get(
          `https://api.github.com/repos/globocom/${this.$route.params.name}/commits`,
          {
            params: { page: this.nextPage, per_page: 20 }
          }
        )
        .then(response => {
          if (response.data.length >= 1) {
            response.data.forEach(commit => {
              this.commits.push(commit)
            })

            this.nextPage += 1

            setTimeout(() => {
              this.loading = false
            }, 100)
          } else {
            this.lastPage = true

            setTimeout(() => {
              this.loading = false
            }, 100)
          }
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
#respositoryInfo {
  margin-top: 80px;

  .wrap {
    display: flex;
    flex-direction: column;
    position: relative;

    .repo {
      padding: 20px 0;
      border-bottom: 1px solid #eee;

      .infos {
        p {
          span.stars,
          span.forks,
          span.language {
            padding: 0 5px;
            color: var(--dark);

            i {
              margin-right: 3px;
              color: var(--dark);
            }
          }
        }
      }
    }

    .commits {
      padding: 20px 0;
    }

    .commit {
      padding: 10px 0;
      -webkit-box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.15);

      .col-12 {
        a {
          p.author {
            color: var(--dark);
          }
        }
      }
    }

    footer {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      bottom: -50px;
      left: 0;
      background: var(--dark);

      nav {
        display: flex;
        align-items: center;

        button {
          border: 1px solid white;
          background: white;
          color: var(--dark);
          transition: var(--defaultTransition);
          font-weight: 500;

          &:hover {
            background: var(--success);
            color: white;
          }
        }
        button[disabled='disabled'] {
          cursor: not-allowed;
          pointer-events: none;
          background: #ddd;
          color: var(--strongGrey);
        }
      }
    }
  }
}
</style>
