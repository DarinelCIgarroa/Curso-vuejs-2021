import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: '¡Hola mundo! :D',
    nombre: 'Darinel',
    apellidos: 'Cigarroa De Los Santos',
    amigos:[],
  },
  mutations: {
    addAmigo(state, amigo){
      state.amigos = [amigo,... state.amigos]
    },
    deleteFriend(state, index){
      state.amigos.splice(index,1)
    }
   
  },
  actions: {
    addAmigoAction(context,amigo){
      context.commit('addAmigo',amigo)
    },
    deleteFriendAction(context,index){
      context.commit('deleteFriend',index)
    }
  },
  modules: {
  },
  getters:{
    mensaje(state){
      return state.msg
    },
    nombreCompleto(state){
      return state.nombre + ' ' + state.apellidos
    }
  }
})
