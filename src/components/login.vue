<template>
  <div class="login">
    <div>
      <v-app id="inspire">
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-1">
                  <v-toolbar dark color="">
                    <v-toolbar-title>Wikilore ERP</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                      <v-btn
                        slot="activator"
                        :href="source"
                        icon
                        large
                        target="_blank"
                      >
                        <v-progress-circular v-if="loading" :width="3" indeterminate color="white"></v-progress-circular>
                      </v-btn>
                    </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field color="black" class="input-group--focused" v-model="email" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                      <v-text-field color="black" class="input-group--focused" @keyup.enter="login()" v-model="senha" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn to="/">Voltar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="login()" color="">Entrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-snackbar
                  :timeout="timeout"
                  :top="'top'"
                  v-model="snackbar"
                >
                  {{ mensagemDeErro }}
                  <v-btn flat color="pink" @click.native="snackbar = false">Fechar</v-btn>
                </v-snackbar>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      senha: '',
      y: 'top',
      x: null,
      timeout: 6000,
      loading: false,
      snackbar: false,
      mensagemDeErro: '',
      mode: '',
      duration: 7500,
      position: 'center',
      isInfinity: false,
      drawer: null
    }
  },
  props: {
    source: String
  },
  methods: {
    login () {
      this.loading = true
      this.snackbar = false
      firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then((user) => {
        if (user) {
          console.log(firebase.auth().currentUser.email)
          var name = firebase.auth().currentUser.displayName
          var email = this.email
          var payload = {
            email,
            name
          }
          this.$store.commit('USER_NAME', payload)
          this.$router.push('/home')
        }
      }).catch((error) => {
        this.loading = false
        this.snackbar = true
        console.log('erro', error.code)
        if (error.code === 'auth/wrong-password') {
          this.mensagemDeErro = 'Verifique Sua Senha'
        } else if (error.code === 'auth/user-not-found') {
          this.mensagemDeErro = 'Verifique Seu Email'
        } else if (error.code === 'auth/invalid-email') {
          this.mensagemDeErro = 'Verifique Seu Email'
        } else if (error.code === 'auth/network-request-failed') {
          this.mensagemDeErro = 'Sem Conexão Com a Internet'
        } else {
          this.mensagemDeErro = error.code
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
