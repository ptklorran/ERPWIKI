<script>
import { db } from '../../../firefiles/firebase'
export default {
  name: 'cadastroProdutos',
  data () {
    return {
      selected: '',
      items: []
    }
  },
  firebase: {
    produtos: db.ref('cadastro/produto')
  },
  methods: {
    item () {
      var query = db.ref('/cadastro/produto').orderByKey()
      query.once('value').then((snapshop) => {
        snapshop.forEach((childSnapshot) => {
          var key = childSnapshot.val()
          this.items.push(key)
          console.log('keys', key)
        })
      })
    },
    irParaCliente (productKey) {
      this.$router.push('/cliente/verproduto/' + productKey)
    }
  },
  created () {
    this.item()
  }
}
</script>

<template lang="pug">
  v-app
    v-toolbar(class="elevation-1", color="red darken-3")
      v-btn(icon, flat, to="/cadastro")
        v-icon(color="white") arrow_back
      v-spacer
      v-btn(icon, flat, to="novoProduto")
        v-icon(color="white") add
    ul(v-for="produto in produtos", key="produto['.key']")
      li  {{ produto }}
</template>
