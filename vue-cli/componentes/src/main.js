import Vue from 'vue'
import App from './App'

// Extendiendo templates

/*
var componente1 = Vue.extend({
  template: '<h1>Hola introducción de componente</h1>'
})


var componente2 = Vue.extend({
  template: '<h3>{{ subtitulo }}</h3>',
  data(){
    return{
      subtitulo: 'Listado de frameworks javaScrip'
    }
  }
})

var componente3 = Vue.extend({
  template: '<div><ul><frameworks v-for="item in frameworks" :key="item.id">{{ item.titulo }}</frameworks></ul></div>',
  data(){
    return{
      frameworks:[
        {id: 1 , titulo: 'Vuejs'},
        {id: 2 , titulo: 'Angular'},
      ]
    }
  }
})

// Registros de los componentes
Vue.component('componente-saludo',{
  methods: {
    action(){
      alert('hola desde el metodo')
    }
  },
  data(){
    return {
      titulo:'Hola introducción de componente'
    }
  }
})
Vue.component('componente-titulo', componente2)
Vue.component('componente-lista', componente3)
Vue.component('frameworks',{
  template: '<li><slot></slot></li>'
})
*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components:{ 
    App
    
  },
  template: '<app/>'
})
