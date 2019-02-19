<template>
  <v-app light>
      <v-content>
        <section>
          <v-parallax src="https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/bg.png?alt=media&token=03565d39-4ccb-4b03-a6db-8a514eb2cbea" height="550">
            <v-layout class="mb-0">
              <v-spacer></v-spacer>
              <v-btn round class="white--text" flat @click="$vuetify.goTo(t, o)"><span class="pa-2">Quem Somos</span></v-btn>
              <v-btn round class="white--text" flat to="/login"><v-icon>account_circle</v-icon><span class="pa-2">Login</span></v-btn>
            </v-layout>
            <v-layout
              v-show="home"
              column
              align-center
              justify-center
              class="mt-0"
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/logo%20wiki.png?alt=media&token=e5474133-bda4-4f05-9db6-4cd3cc16cd9a" alt="Vue.js" height="160">
              <div style="font-size: 35px" class="paragrafo mb-2 text-xs-center">Wikilore Development</div>
              <div class="paragrafo mb-5 text-xs-center">Desenvolvemos Sistemas Web e WebSites ao estilo Single Page Application</div>
              <v-btn
                class="yellow darken-2 mt-3 mb-5 white--text paragrafo"
                round
                @click="$vuetify.goTo(target, options)"
              >
                Veja a nossa
                tecnologia!
                <v-icon class="pa-2">arrow_downward</v-icon>
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>
        <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs6 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="paragrafo">Tecnologia Baseada em JavaScript</h2>
              <v-container>
                <v-layout
                  justify-center
                  class="paragrafo"
                >
                Através de sua grande flexibilidade, confiabilidade e robustez, o JavaScript vem se tornando a linguagem de programação cada vez mais utilizada no cenário atual do desenvolvimento, por isso nosso foco é mesclar tecnologias baseadas nela para trazer aplicações cada vez mais rápidas e seguras para o nosso público.
                </v-layout>
              </v-container>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-layout align-center justify-center>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="node.js" height="150">
                    </v-layout>
                    <v-card-title primary-title class="layout justify-center">
                      <h3 class="text-xs-center paragrafo">Node.Js</h3>
                    </v-card-title>
                    <v-card-text class="paragrafo">
                      <v-layout
                        justify-center
                      >
                        Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicações em tempo real com troca intensa de dados através de dispositivos distribuídos.
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-layout align-center justify-center>
                      <img src="https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png" alt="vue.js" height="150">
                    </v-layout>
                    <v-card-title primary-title class="layout justify-center">
                      <h3 class="paragrafo">Vue.Js</h3>
                    </v-card-title>
                    <v-card-text class="paragrafo">
                      <v-layout
                        column
                        justify-center
                        align-top
                      >
                        O Vue.js destaca-se pela sua simplicidade em executar as mesmas tarefas dos outros frameworks. Nele você possui os mesmos conceitos que um framework reativo possui, como data bind, two way, events, criação de componentes, entre outros.
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-layout align-center justify-center>
                      <img src="https://firebase.google.com/_static/images/firebase/touchicon-180.png" alt="firebase" height="150">
                    </v-layout>
                    <v-card-title primary-title class="layout justify-center">
                      <h3 class="text-xs-center paragrafo">Firebase</h3>
                    </v-card-title>
                    <v-card-text>
                      <div class="layout paragrafo column justify-center align-top">
                        Além de fazer o aplicativo funcionar da forma desejada em vários tipos de dispositivos diferentes, o desenvolvedor deve pensar na infraestrutura, possíveis falhas, atualizações que não causem novos problemas, segurança nas transferências de dados e garantir uma experiência satisfatória para os mesmos. Pensando nisso, foi construído o Firebase.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <QuemSomos />
      </section>
      </v-content>
      <div>
        <Rodape />
      </div>
  </v-app>
</template>

<script>
import Rodape from './homePublicRodape'
import QuemSomos from './quemsomos'

export default {
  name: 'homepublic',
  data () {
    return {
      home: true,
      home2: false,
      gradient: 'to top, #7B1FA2, #E1BEE7'
    }
  },
  components: {
    Rodape,
    QuemSomos
  },
  computed: {
    target () {
      const value = 600
      return value
    },
    options () {
      return {
        duration: 1300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    },
    t () {
      const value = 1350
      return value
    },
    o () {
      return {
        duration: 1300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .novaFonte {
    font-family: 'Cookie', cursive;
    font-size: 40px
  }
  .paragrafo {
    font-family: 'Quicksand', sans-serif;
    font-size: 18px
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
