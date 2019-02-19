<template lang="pug">
  v-layout.row
    v-flex.xs12
      v-card(flat tile class="paragrafo yellow lighten-2 black--text text-xs-center")
        v-flex.xs12
          v-card-text
            v-btn(v-for="icon in icons", :key="icon.icon", :target="blank", class="mx-3 white--text", icon)
              v-icon(color="black" size="24px") {{ icon.icon }}
            v-card-text
              span Buscamos sempre evoluir o paradigma aos quais seguimos para desenvolver aplicações cada vez mais robustas, rápidas e seguras. Nos Acompanhe nas Redes Sociais e fique sempre ligado aos novos recursos que implementamos em nosso escopo.
            v-divider

            v-card-text
              span &copy;2018 - <strong>Wikilore Development</strong>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        {link: 'facebook.com', icon: 'fab fa-facebook'},
        {link: 'instagram.com', icon: 'fab fa-instagram'}
      ]
    }
  }
}
</script>

<style>
  .paragrafo {
    font-family: 'Quicksand', sans-serif;
    font-size: 15px
  }
</style>
