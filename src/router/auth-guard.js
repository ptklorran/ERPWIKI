import '../vuex/store'

export default (to, from, next) => {
  if (this.$store.state.user.name != null) {
    next()
  } else {
    next('/login')
  }
}
