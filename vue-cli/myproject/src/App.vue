<template>
  <form @submit.prevent="enviar">
    <my-inputs-component
      name="usuario"
      :rules="{ required: true, min: 8 }"
      :value="usuario.value"
      type="text"
      @update="getName"
    />

    <my-inputs-component
      name="password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
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
    MyInputsComponent,
  },
  data() {
    return {
      usuario: {
        value: "",
        valid: false,
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
