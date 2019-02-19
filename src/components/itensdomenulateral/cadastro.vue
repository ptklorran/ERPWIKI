<template>
  <v-container pa-2>
    <v-layout xs12>
      <v-subheader>Cadastros</v-subheader>
    </v-layout>
    <v-layout fill-height>
      <v-flex xs12>
        <v-flex xs12 mb-2>
          <v-card>
            <v-list class="paragrafo" dense v-for="(item, index) in menu" :key="item.nome">
              <v-list-tile
                avatar
                @click="irParaMenu(item.nome)"
              >
                <v-list-tile-avatar>
                  <v-avatar slot="activator"><v-icon size="30" color="red darken-2">{{ item.icon }}</v-icon></v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.nome }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
                <v-divider
                  :key="index"
                  inset
                ></v-divider>
            </v-list>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {icon: 'how_to_reg', nome: 'CLIENTES'},
        {icon: 'assignment_ind', nome: 'COLABORADORES'},
        {icon: 'local_dining', nome: 'PRODUTOS'},
        {icon: 'local_shipping', nome: 'FORNECEDORES'},
        {icon: 'device_hub', nome: 'CONVÊNIOS'},
        {icon: 'style', nome: 'PROMOÇÕES'},
        {icon: 'edit_location', nome: 'BAIRROS'}
      ]
    }
  },
  methods: {
    irParaMenu (nome) {
      if (nome === 'CLIENTES') {
        this.$router.push('/cliente')
      } else if (nome === 'PRODUTOS') {
        this.$router.push('/produto')
      }
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
