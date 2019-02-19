<template>
  <v-app id="app">
    <transition name="router-anim">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
html, body {
    height: calc(100% - 50px);
  }

  .app {
    height: calc(60% - 50px);
  }

  .page {
    position: fixed;
    width: inherit;
  }
  .router-anim-enter-active {
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }

  .router-anim-leave-active {
    animation: going .5s
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }

  @keyframes coming {
   from {
     transform: translateX(-50px);
     opacity: 0;
   }
   to {
     transform: translateX(0px);
     opacity: 1;
   }
  }
</style>
