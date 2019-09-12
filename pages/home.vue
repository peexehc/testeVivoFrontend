<template>
  <section id="respositoryList">
    <div class="container-fluid wrap">
      <div v-for="repo in repositoryList" :key="repo.id" class="row repos">
        <div class="col-6 repo-name">
          <router-link :to="{ path: `/${repo.name}` }" tag="a">
            <div class="box">
              <p class="name m-0">{{ repo.name }}</p>
              <p v-if="repo.description !== null" class="desc m-0">
                {{ repo.description }}
              </p>
            </div>
          </router-link>
        </div>
        <div class="col-6 repo-infos">
          <div class="box">
            <p class="info m-0">
              <span class="stars">
                <i class="fas fa-star"></i>{{ repo.stargazers_count }}
              </span>
              <span class="forks">
                <i class="fas fa-code-branch"></i>{{ repo.forks_count }}
              </span>
              <span class="language">
                {{ repo.language }}
              </span>
            </p>
          </div>
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
          <button v-else disabled="disabled">Fim dos repositórios</button>
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
      repositoryList: [],
      nextPage: 2,
      lastPage: false,
      loading: false
    }
  },

  async asyncData({ $axios }) {
    let repos = null

    const data = await $axios.$get(
      'https://api.github.com/orgs/globocom/repos',
      {
        params: { page: 1, per_page: 100 }
      }
    )

    repos = data

    return { repositoryList: repos }
  },

  async mounted() {
    const orderedRepos = await this.repositoryList.sort(function(a, b) {
      return b.stargazers_count - a.stargazers_count
    })

    this.repositoryList = orderedRepos
  },

  methods: {
    loadMore() {
      this.loading = true

      axios
        .get('https://api.github.com/orgs/globocom/repos', {
          params: { page: this.nextPage, per_page: 100 }
        })
        .then(response => {
          if (response.data.length >= 1) {
            response.data.forEach(repository => {
              this.repositoryList.push(repository)
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
#respositoryList {
  margin-top: 80px;

  .wrap {
    display: flex;
    flex-direction: column;
    position: relative;

    .repos {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      align-content: stretch;
      min-height: 70px;
      transition: all 0.25s ease;

      &:hover {
        .repo-name,
        .repo-infos {
          background: var(--strongGrey);
        }

        .repo-infos {
          .box {
            .info {
              span {
                color: white;

                i {
                  color: white;
                }
              }
            }
          }
        }
      }

      .repo-name,
      .repo-infos {
        transition: all 0.25s ease;

        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.45);
          -moz-box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.45);
          box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.45);
          padding: 10px 10px;
          height: 100%;
        }
      }

      .repo-name {
        background: #3498db;
        padding: 0;
        text-align: center;
        .box {
          p.name {
            font-size: 16px;
            color: white;
          }
          p.desc {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
      .repo-infos {
        background: white;
        padding: 0;
        text-align: center;

        .box {
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
