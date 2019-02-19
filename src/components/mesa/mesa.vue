<template lang="pug">
  v-app
    v-layout(column, class="white--text", fill-height)
      v-flex(xs12, md12, class="pt-5 pb-5")
        v-card(class="white pt-0 pa-2", height="100%")
          v-layout(row, wrap)
            v-flex(xs12)
              v-toolbar(class="elevation-1 white--text", color="red darken-3", fixed, height="55px")
                v-btn(flat, icon, to="/pedido")
                  v-icon(color="white") arrow_back
                v-spacer
                h4 {{ dadosMesa.cliente }}
                v-spacer
                v-divider(vertical, inset)
                <strong class="pl-2 pr-2"> R${{ valorTotal }} </strong>
                v-divider(vertical, inset)
                v-btn(icon, outline, color="white") {{ dadosMesa.numeroMesa }}
            v-flex(xs12, md12, class="pb-0")
              v-list(two-line, class="", v-for="lista in comanda", :key="lista.chave", dense)
                v-list-tile
                  v-list-tile-content
                    v-list-tile-title
                      h3 {{ lista.data.produto }}
                    v-list-tile-sub-title(class="green--text") R${{ lista.data.valor }}
                  v-list-tile-action
                    v-btn(icon, large, @click="removeItemDaComanda(lista.chave)")
                      v-icon(color="orange lighten-2") delete
                v-divider
              v-footer(fixed, class="transparent pb-3")
                v-layout(column)
                  v-flex
                    v-divider
                    v-toolbar(dense, class="elevation-0 pa-0 pt-2 pb-2 transparent", color="red darken-3", height="45px")
                      span(class="pr-3", v-if="selected.nome != '' ") <strong class="white--text"> R${{ selected.valor }} </strong>
                      v-autocomplete(prepend-inner-icon="local_dining", class="pt-1", @keyup.enter="addProductToComanda()" clearable, v-model="selected", :items="products", item-text="nome", item-value="valor", return-object, solo, hide-no-data)
                      v-btn(flat, icon, @click.prevent="addProductToComanda()")
                        v-icon(class="pb-1", color="white") add
</template>

<script>
import { db } from '../../firefiles/firebase'

export default {
  props: ['id'],
  data () {
    return {
      selected: {
        nome: null,
        valor: null
      },
      valorTotal: 0,
      dadosMesa: {},
      productSelected: {},
      comanda: []
    }
  },
  firebase: {
    products: db.ref('/cadastro/produto/')
  },
  methods: {
    mesaId () {
      var ref = db.ref('mesas')
      ref.once('value').then((snapshot) => {
        this.dadosMesa = snapshot.child(this.id).val()
      })
    },
    somaTudo () {
      var query = db.ref('mesas/' + this.id + '/comanda').orderByKey()
      query.once('value').then((snapshop) => {
        snapshop.forEach((childSnapshop) => {
          var parcial = childSnapshop.child('valor').val()
          this.valorTotal = this.valorTotal + parseFloat(parcial)
          console.log(this.valorTotal)
          db.ref('mesas/' + this.id).child('precomesa').set({valortotal: this.valorTotal})
        })
      })
    },
    listaComanda () {
      this.valorTotal = 0
      var query = db.ref('/mesas/' + this.id + '/comanda').orderByKey()
      query.once('value').then((snapshop) => {
        snapshop.forEach((childSnapshop) => {
          var key = childSnapshop.key
          var data = childSnapshop.val()
          var dadosComanda = {
            chave: key,
            data
          }
          this.comanda.push(dadosComanda)
        })
      })
      this.somaTudo()
    },
    addProductToComanda () {
      db.ref('mesas').child(this.id).child('comanda').push({produto: this.selected.nome, valor: this.selected.valor})
      this.comanda = []
      this.selected = {}
      this.valorTotal = 0
      this.listaComanda()
    },
    removeItemDaComanda (item) {
      var itemId = item
      let mesa = this.id
      db.ref('mesas/' + mesa + '/comanda').child(itemId).remove()
      this.comanda = []
      this.valorTotal = 0
      this.listaComanda()
    }
  },
  created () {
    this.mesaId()
    this.listaComanda()
  }
}
</script>

<style lang="scss">
  .nomeCliente {
    font-family: 'Quicksand', sans-serif;
    font-size: 17px;
  }
</style>
