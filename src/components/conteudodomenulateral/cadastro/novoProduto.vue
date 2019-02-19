<template lang="pug">
  v-layout(column)
    v-flex(xs12, md12)
      v-toolbar(class="elevation-1", color="red darken-3")
        v-btn(flat, icon, to="/produto")
          v-icon(color="white") arrow_back
    v-flex(xs12, md12, class="pa-2")
      v-text-field(label="nome", solo, v-model="novoProduto.nome")
      v-text-field(label="valor", solo, v-model="novoProduto.valor", Number)
      v-btn(@click="cadastrarProduto") Cadastrar Produto
</template>

<script>
import { db } from '@/firefiles/firebase'

export default {
  data () {
    return {
      novoProduto: {
        nome: '',
        valor: ''
      }
    }
  },
  firebase: {
  },
  methods: {
    cadastrarProduto () {
      db.ref('cadastro/produto').push(this.novoProduto)
    }
  }
}
</script>
