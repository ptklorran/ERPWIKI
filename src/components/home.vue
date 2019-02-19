<template>
  <v-app  id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="roteador(child, i)"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="roteador(item)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      class="elevation-1"
      color="red darken-2"
      dark
      app
      fixed
    >
    <v-btn  @click.stop="drawer = !drawer" flat icon>
      <v-icon>menu</v-icon>
    </v-btn>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
        <span class="hidden-sm-and-down">wikilore {{ usuario }}</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-icon="search"
        label="Pesquisar"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <v-icon>account_circle</v-icon>
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!--ROTEADOR: CONTROLE DO VUE-ROUTER DEFINIDO EM SRC/ROUTER/INDEX.JS-->
      <transition name="router-anim">
        <router-view />
      </transition>
      <!--ROTEADOR: ATÉ AQUI-->
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'history', text: 'Pedido' },
      { icon: 'description', text: 'Caixa' },
      { icon: 'contacts', text: 'Cadastro' },
      { icon: 'import_export', text: 'Estoque' },
      { icon: 'assignment', text: 'Relatório' },
      /* {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'CLIENTES',
        model: false,
        children: [
          { text: 'Cadastrar Cliente' },
          { text: 'Listar Clientes' }
        ]
      }, */
      { text: '' },
      { icon: 'group', text: 'Ajuda' }
    ]
  }),
  props: {
    source: String
  },
  computed: {
    mais_um () {
      return this.$store.state.count
    },
    usuario () {
      return this.$store.state.user.nome
    }
  },
  methods: {
    mais () {
      this.$store.commit('mais_um')
    },
    /* roteador é responsável por verificar um item clicado no menu
    lateral (drawer) e direcionar para a página correspondente usando o nome como condição */
    roteador (child, i) {
      if (child.text === 'Pedido') {
        this.$router.push('/pedido')
      } else if (child.text === 'Caixa') {
        this.$router.push('/caixa')
      } else if (child.text === 'Cadastro') {
        this.$router.push('/cadastro')
      } else if (child.text === 'Estoque') {
        this.$router.push('/estoque')
      } else if (child.text === 'Relatório') {
        this.$router.push('/relatorio')
      } else if (child.text === 'Ajuda') {
        this.$router.push('/ajuda')
      } else {
        alert('Esta página não existe!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

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
      transform: translateX(-20px);
      opacity: 0;
    }
  }

  @keyframes coming {
   from {
     transform: translateX(-20px);
     opacity: 0;
   }
   to {
     transform: translateX(0px);
     opacity: 1;
   }
  }
</style>
