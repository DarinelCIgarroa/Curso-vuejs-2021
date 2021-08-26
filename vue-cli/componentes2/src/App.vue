<template>
  <div class="content-contador">
    <contador-component></contador-component>
    <contador-component></contador-component>
    <contador-component></contador-component>
    <contador-component></contador-component>
  </div>
  <div class="container">
    <h1>Lista de planes de cursos de programación</h1>
    <planes-component @pasarDato="recibirValor" ></planes-component>
  </div>
</template>

<script>
import ContadorComponent from "./components/ContadorComponent.vue"
import PlanesComponent from "./components/PlanesComponent.vue"

export default {
  name: "App",
  components: {
    ContadorComponent,
    PlanesComponent
  },
  methods: {
    recibirValor(value){
      console.log(value)
    }
  },

};
</script>

<style>
body {
  background: rgb(2, 61, 2);
}
.content-contador {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container h1 {
  color: white;
}
</style>
