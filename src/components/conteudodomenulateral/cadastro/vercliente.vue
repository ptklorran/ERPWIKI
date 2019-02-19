<template>
  <div>
    <v-toolbar xs12 color="red darken-3">
      <v-btn class="transparent" icon flat to="/cliente"><v-icon color="white">arrow_back</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-divider inset vertical></v-divider>
      <v-btn icon color="red" @click="excluirConfirmar = true" flat round><span><v-icon color="white">delete</v-icon></span></v-btn>
      <v-divider inset vertical></v-divider>
      <v-btn class="pl-2" icon flat> <v-icon color="white" >create</v-icon> </v-btn>
    </v-toolbar>
    <v-layout
              column
              align-center
              justify-center
              class="mt-0 mr-4"
            >
              <img src="https://png.pngtree.com/element_origin_min_pic/16/11/25/f2db5b1fae65676bfd1ecae1dbfdc3a2.jpg" :alt="data.nome" height="100">
              <div style="font-size: 25px" class="paragrafo mb-2 text-xs-center">{{ data.nome }}</div>
              <div class="paragrafo mb-1 text-xs-center">CPF: {{ data.cpf }}</div>
            </v-layout>
            <v-layout column pa-2>
              <v-divider></v-divider>
              <v-tabs
    centered
    color="transparent"
    dark
    icons-and-text
  >
    <v-tabs-slider color="blue danker-2"></v-tabs-slider>

    <v-tab class="black--text" href="#tab-1">
      Dados Pessoais
      <v-icon color="black">account_box</v-icon>
    </v-tab>

    <v-tab class="black--text" href="#tab-2">
      Dados Para Contato
      <v-icon color="black">phone</v-icon>
    </v-tab>

    <v-tab class="black--text" href="#tab-3">
      Compras feitas
      <v-icon color="black">shopping_cart</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :id="'tab-' + i"
      :key="i"
    >
      <v-card flat>
        <v-card-text></v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
            </v-layout>
    <v-dialog v-model="excluirConfirmar" width="500">
      <v-card>
        <v-card-title class="headline white">
          <span>Confirmar Exclusão</span>
          <v-spacer></v-spacer>
          <v-divider vertical inset></v-divider>
          <v-icon large class="" color="yellow">warning</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          Você Confirma a Exclusão do Seguinte Cliente: <strong>{{ data.nome }}</strong>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="excluirConfirmar = false">Cancelar</v-btn>
          <v-btn flat @click="excluirCliente()">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '../../../firefiles/firebase'
export default {
  props: ['id'],
  data () {
    return {
      data: {},
      excluirConfirmar: false
    }
  },
  firebase: {
    clienteClicado: db.ref('cliente/' + this.id)
  },
  methods: {
    pegaCliente () {
      var ref = db.ref('cadastro/cliente/')
      ref.once('value').then((snapshop) => {
        var dadosCliente = snapshop.child(this.id).val()
        this.data = dadosCliente
      })
    },
    excluirCliente () {
      db.ref('cadastro/cliente/' + this.id).remove()
      this.$router.push('/cliente')
    }
  },
  created () {
    this.pegaCliente()
  }
}
</script>
