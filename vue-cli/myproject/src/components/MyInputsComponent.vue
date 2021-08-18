<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <p class="error">{{ error }}</p>
    </div>
    <input
      :id="name"
      placeholder="Ingresa tu usuario"
      :value="value"
      :type="type"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  name: "MyInputsComponent",
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: Object,
    value: String,
    type: String,
  },
  computed: {
    error() {
      return this.validar(this.value);
    },
  },
  methods: {
    validar() {
      if (this.rules.required && !this.value) {
        return "Obligatorio";
      }
      if (this.rules.min && this.value.length < this.rules.min) {
        return `Minimo ${this.rules.min} caracteres`;
      }
    },
    input($event) {
      this.$emit("update", {
        value: $event.target.value,
        name: this.name,
        valid: this.validar($event.target.value) ? false : true,
      });
    },
  },
};
</script>
<style scoped>
.label {
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.error {
  color: red;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
}
input {
  width: 250px;
  border: 1.5px solid rgb(30, 15, 160);
  font-size: 16px;
  padding: 12px 5px;
  color: black;
  margin-bottom: 10px;
}
</style>