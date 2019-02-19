<template>
  <v-app>
    <v-layout class="paragrafo" column row>
      <v-toolbar class="white--text" color="red darken-3">
        <v-btn flat icon to="/home">
          <v-icon color="white">arrow_back</v-icon>
        </v-btn>
        <span class="toolbarNome">Mesas</span>
        <v-spacer></v-spacer>
        <v-btn flat icon>
          <v-icon color="white">more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-flex xs12>
        <v-card height="100%">
        <v-list dense two-line>
          <template v-for="(mesa, index) of listademesas">
            <v-list-tile
              :key="mesa['.key']"
              avatar
              ripple
              @click="irParaMesa(mesa['.key'])"
            >
              <v-list-tile-avatar
                class="paragrafo"
                avatar
              >
                <span><v-btn outline icon color="green">{{ mesa.numeroMesa }}</v-btn></span>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="paragrafo">
                  {{ mesa.cliente }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{mesa.status}}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-spacer></v-spacer>
              <v-list-tile-action class="paragrafo green--text">
                R$ {{ mesa.precomesa.valortotal }}
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              inset
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
      </v-flex>
      <v-btn
        v-show="dialogoBotao"
        fab
        bottom
        right
        color="red darken-2"
        dark
        fixed
        @click.stop="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card color="white">
          <v-card-title
            class="grey lighten-4 py-4 paragrafo"
          >
          <v-btn flat icon color="error" @click="dialog = false"> <v-icon>close</v-icon> </v-btn>
          <h3 pr-5>Nova Mesa</h3>
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="mesa"
                  prepend-icon="receipt"
                  placeholder="Número da Mesa"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-autocomplete
                    v-model="clientSelected"
                    :items="items"
                    label="Cliente"
                    chips
                    prepend-icon="face"
                    >
                  </v-autocomplete>
                </v-layout>
              </v-flex>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <!--
                  <v-autocomplete
                    v-model="clientSelected"
                    :items="items"
                    label="Promoção"
                    chips
                    prepend-icon="loyalty"
                    >
                  </v-autocomplete> -->
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary" @click.stop="cadastro = true, dialog = false">Cadastro</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="success" @click="dialog = false, abrirMesa()">Abrir Mesa</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="cadastro" width="800px">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Cadastro de Cliente
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="cadastroCPFCliente"
                  prepend-icon="add"
                  placeholder="CPF"
                  mask="###.###.###-##"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    v-model="cadastroNomeCliente"
                    placeholder="NOME DO CLIENTE"
                  ></v-text-field>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="error" @click="cadastro = false">Cancelar</v-btn>
            <v-btn flat color="success" @click="cadastro = false, cadastrarCliente()">Cadastrar Cliente</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-app>
</template>

<script>
import { db } from '@/firefiles/firebase'

export default {
  name: 'pedido',
  data () {
    return {
      dialog: false,
      dialogoBotao: false,
      cadastro: false,
      mesa: null,
      obs: '',
      items: [],
      cadastroNomeCliente: '',
      cadastroCPFCliente: null,
      clientSelected: ''
    }
  },
  firebase: {
    listademesas: db.ref('mesas')
  },
  methods: {
    item () {
      var query = db.ref('/cadastro/cliente').orderByKey()
      query.once('value').then((snapshop) => {
        snapshop.forEach((childSnapshot) => {
          var key = childSnapshot.val()
          this.items.push(key.nome)
        })
      })
    },
    cadastrarCliente () {
      db.ref('cadastro').child('cliente').push({nome: this.cadastroNomeCliente, cpf: this.cadastroCPFCliente, cadastro: 'pendente'})
      this.item()
    },
    timeOutBotaoAdd () {
      setTimeout(() => { this.dialogoBotao = true }, 2000)
    },
    abrirMesa () {
      var numMesa = parseFloat(this.mesa)
      if (numMesa <= 0 || this.mesa === null || numMesa > 100) {
        alert('Número da mesa incorreto')
      } else {
        db.ref('mesas').push({numeroMesa: this.mesa, cliente: this.clientSelected, precomesa: {valortotal: 0}, status: 'aberta'})
      }
    },
    irParaMesa (mesaId) {
      this.$router.push('/pedido/mesa/' + mesaId)
    },
    ocultarToolbarHome () {
      this.$store.commit('OCULTAR_TOOLBAR_HOME')
    },
    mostrarToolbarHome () {
      this.$store.commit('MOSTRAR_TOOLBAR_HOME')
    }
  },
  created () {
    this.timeOutBotaoAdd()
    this.item()
    this.ocultarToolbarHome()
  },
  beforeDestroy () {
    this.mostrarToolbarHome()
  }
}
</script>

<style lang="scss">
  .paragrafo {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
  }
  .toolbarNome {
    font-family: 'Quicksand', sans-serif;
    font-size: 17px;
  }
</style>
