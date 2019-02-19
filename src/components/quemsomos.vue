<template>
  <v-flex xs12>
    <v-divider></v-divider>
    <br>
    <div style="font-size: 25px" class="paragrafo" align="center">Quem Somos <v-icon>face</v-icon></div>
    <v-container grid-list-xl mt-2>
      <v-layout row wrap>
        <v-flex v-for="membro in membros" :key="membro.nome" xs12 md4>
          <v-card class="" hover color="green lighten-1">
            <v-layout align-center justify-center>
              <v-card-media>
                <v-avatar
                  size="100"
                  class="mt-4"
                >
                  <img :src=membro.src :alt=membro.nome>
                </v-avatar>
              </v-card-media>
            </v-layout>
            <v-card-title primary-title class="layout justify-center">
              <div class="black--text text-xs-center paragrafo">{{ membro.nome }}</div>
            </v-card-title>
            <v-card-text class="paragrafo">
              <v-layout
                justify-center
              >
              <v-icon class="pa-2 mb-2" color="white">fab fa-facebook</v-icon>
              <v-icon class="pa-2 mb-2" color="white">fab fa-instagram</v-icon>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      membros: [
        { nome: 'Lorran Ramos', src: 'https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/lorran.jpg?alt=media&token=da4657ed-f2ee-4ac3-b9aa-76f3d76abf1b' },
        { nome: 'Thiago Gonçalves', src: 'https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/thiago.jpg?alt=media&token=83f85d19-4a37-43ad-a8d0-8f6d73e9b66c' },
        { nome: 'Maísa Almeira ', src: 'https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/ma%C3%ADsa.JPG?alt=media&token=c055a62e-29fd-48e9-8a15-16a0476cd6c9' },
        { nome: 'Alexânia Giusti', src: 'https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/WhatsApp%20Image%202018-07-24%20at%2014.19.24.jpeg?alt=media&token=d05c67f4-facd-4206-a9d8-438e25a7f795' },
        { nome: 'Marina Fagundes', src: 'https://firebasestorage.googleapis.com/v0/b/erp-wikilore.appspot.com/o/marina%20fagundes.jpg?alt=media&token=8af2d7c2-3be3-4d60-8ce5-107036072cc3' },
        {nome: 'Ashley', src: 'https://img.elo7.com.br/product/original/15A4C38/busto-buda-espiritualidade.jpg'},
        {nome: 'Caio ', src: 'https://img.elo7.com.br/product/original/15A4C38/busto-buda-espiritualidade.jpg'},
        {nome: 'Pepa ', src: 'https://img.elo7.com.br/product/original/15A4C38/busto-buda-espiritualidade.jpg'},
        {nome: 'Marcelo ', src: 'https://img.elo7.com.br/product/original/15A4C38/busto-buda-espiritualidade.jpg'}
      ]
    }
  }
}
</script>
