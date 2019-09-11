export const state = () => ({
  windowSize: {
    width: null,
    height: null
  }
})

export const getters = {
  windowSizes: state => {
    return state.windowSize
  }
}

export const mutations = {
  UPDATE_WINDOW_SIZE: (state, payload) => {
    state.windowSize.width = payload.width
    state.windowSize.height = payload.height
  }
}

export const actions = {
  updateSize: (context, payload) => {
    context.commit('UPDATE_WINDOW_SIZE', payload)
  }
}
