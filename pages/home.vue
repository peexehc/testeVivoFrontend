<template>
  <section id="respositoryList">
    <div class="container-fluid">
      <div class="row title reset-row">
        <div class="col-12 text-center">
          <h1 class="mt-3 mb-3">Lista de repositórios</h1>
        </div>
      </div>
      <div
        v-for="repo in repositoryList"
        :key="repo.id"
        class="row repos reset-row"
      >
        <div class="col-6 repo-name">
          <div class="box">
            <p class="name m-0">{{ repo.name }}</p>
            <p class="desc m-0">{{ repo.description }}</p>
          </div>
        </div>
        <div class="col-6 repo-infos">
          <div class="box">
            <p class="info m-0">
              {{ repo.stargazers_count }}
            </p>
            <p class="info m-0">
              {{ repo.forks_count }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      repositoryList: []
    }
  },

  async asyncData({ store, $axios }) {
    // const talentsGetter = store.getters['talents/getTalents']
    let repos = null

    // if (talentsGetter === null) {
    const data = await $axios.$get(
      'https://api.github.com/orgs/globocom/repos',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'peexehc',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers':
            'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval'
        }
      }
    )

    // store.commit('talents/SET_TALENTS', data)
    repos = data
    // } else {
    //   talents = talentsGetter
    // }

    return { repositoryList: repos }
  }
}
</script>
<style lang="scss"></style>
