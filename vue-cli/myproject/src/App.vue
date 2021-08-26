<template>
  <form @submit.prevent="enviar">
    <my-inputs-component
      name="usuario"
      :rules="{ required: true, min: 8 }"
      :value="usuario.value"
      placeholder = "ingresa tu usuario"
      type="text"
      @update="getName"
    />

    <my-inputs-component
      name="apellidos"
      :rules="{ required: true, min:5}"
      :value="apellidos.value"
      placeholder = "ingresa tus apellidos"
      type="text"
      @update="getName"
    />

    <my-inputs-component
      name="password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      placeholder="Ingresa tu contraseña"
      type="password"
      @update="getName"
    />

    <my-button-component
      color="black"
      background="#078162"
      :disabled="!BottonActive"
    />
  </form>
</template>

<script>
import MyButtonComponent from "./components/MyButtonComponent.vue";
import MyInputsComponent from "./components/MyInputsComponent.vue";

export default {
  name: "App",
  components: {
    MyButtonComponent,
    MyInputsComponent
  },
  data() {
    return {
      usuario: {
        value: "",
        valid: false,
      },
      apellidos: {
        value: "",
        valid: false
      },
      password: {
        value: "",
        valid: false,
      },
    };
  },
  computed: {
    BottonActive() {
      return this.usuario.valid && this.password.valid;
    },
  },
  methods: {
    getName(payload) {
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid,
      };
    },
    enviar(){
      console.log('enviar')
    }
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
