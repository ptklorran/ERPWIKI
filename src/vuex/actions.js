export default {
  SET_USER (store, obj) {
    store.user = obj.user
  },
  mais_um (state) {
    state.count++
  },
  OCULTAR_TOOLBAR_HOME (state) {
    state.toolbarHome = false
  },
  MOSTRAR_TOOLBAR_HOME (state) {
    state.toolbarHome = true
  },
  USER_NAME (state, payload) {
    state.user.email = payload.email
    state.user.nome = payload.name
  }
}
