<script>
import { db } from '../../../firefiles/firebase'
export default {
  name: 'cadastroClientes',
  data () {
    return {
      selected: '',
      items: []
    }
  },
  firebase: {
    clientes: db.ref('cadastro/cliente')
  },
  methods: {
    item () {
      var query = db.ref('/cadastro/cliente').orderByKey()
      query.once('value').then((snapshop) => {
        snapshop.forEach((childSnapshot) => {
          var key = childSnapshot.val()
          this.items.push(key.nome)
          console.log('keys', key.nome)
        })
      })
    },
    irParaCliente (clientKey) {
      this.$router.push('/cliente/vercliente/' + clientKey)
    }
  },
  created () {
    this.item()
  }
}
</script>

<template>
  <div>
    <v-toolbar mb-0 x12 class="elevation-1 black--text" color="red darken-2">
        <v-btn flat icon to="/cadastro"><v-icon color="white">arrow_back</v-icon></v-btn>
        <span class="white--text title">Clientes</span>
        <v-spacer></v-spacer>
        <v-btn round flat color="white"></v-btn>
    </v-toolbar>
    <v-flex mt-2 xs12>
        <v-layout column xs12 row wrap v-for="(cliente, index) of clientes" :key="cliente.key">
          <v-list dense>
            <v-list-tile
              @click="irParaCliente(cliente['.key'])"
            >
              <v-list-tile-avatar>
                <v-icon color="green darken-2">face</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-title>
                {{ cliente.nome }}
              </v-list-tile-title>
            </v-list-tile>
            <v-divider
              inset
              :key="index"
            ></v-divider>
          </v-list>
        </v-layout>
      <v-combobox
        v-if="false"
        v-model="selected"
        :items="items"
        chips
        label="CLIENTE"
      >
      </v-combobox>
    </v-flex>
  </div>
</template>
