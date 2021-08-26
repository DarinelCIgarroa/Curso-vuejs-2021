<template>
    <div class="container">
        <h1>Inicia sesión como:</h1>
        <router-link :to="item" v-for="item in usuarios" :key="item">
            <button class="btn btn-sm btn-info">{{ item }}</button>
        </router-link>
        <usuario-component></usuario-component>
    </div>
</template>

<script>
import UsuarioComponent from "@/components/UsuarioComponent.vue"

export default {
    data(){
        return{
            usuarios: ['Darinel', 'Derky', 'Diana', 'Darwin']
        }
    },
    components:{
        UsuarioComponent
    }
}
</script>

<style scoped>
.btn{
    margin: 5px
}
</style>