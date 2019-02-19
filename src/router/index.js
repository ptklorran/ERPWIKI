import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import HomePublic from '@/components/homePublic'

import Login from '@/components/login'
import Pedido from '@/components/itensdomenulateral/pedido'

import Caixa from '@/components/itensdomenulateral/caixa'
import ControleDeComanda from '@/components/conteudodomenulateral/caixa/controledecomanda'

import Cadastro from '@/components/itensdomenulateral/cadastro'

import Produto from '@/components/conteudodomenulateral/cadastro/produtos'
import NovoProduto from '@/components/conteudodomenulateral/cadastro/novoProduto'

import Cliente from '@/components/conteudodomenulateral/cadastro/clientes'
import verCliente from '@/components/conteudodomenulateral/cadastro/vercliente'

import Estoque from '@/components/itensdomenulateral/estoque'
import Relatorio from '@/components/itensdomenulateral/relatorio'
import Ajuda from '@/components/itensdomenulateral/ajuda'
import Mesa from '@/components/mesa/mesa'

// import AuthGuard from './auth-guard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: HomePublic
    },
    {
      path: '/',
      component: HomePublic
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      // beforeEnter: AuthGuard,
      children: [
        {
          path: '/caixa',
          component: Caixa
        },
        {
          path: '/controledecomanda',
          component: ControleDeComanda
        },
        {
          path: '/cadastro',
          component: Cadastro
        },
        {
          path: '/estoque',
          component: Estoque
        },
        {
          path: '/relatorio',
          component: Relatorio
        },
        {
          path: '/ajuda',
          component: Ajuda
        }
      ]
    },
    {
      path: '/pedido',
      component: Pedido
    },
    {
      path: '/pedido/mesa/:id',
      props: true,
      component: Mesa
    },
    {
      path: '/cliente',
      component: Cliente
    },
    {
      path: '/cliente/vercliente/:id',
      component: verCliente,
      props: true
    },
    {
      path: '/produto',
      component: Produto
    },
    {
      path: '/novoproduto',
      component: NovoProduto
    }
  ]
})

export default router
