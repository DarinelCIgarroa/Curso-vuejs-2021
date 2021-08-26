<template lang="es">
    <div>
        <plan-component v-for="plan in planes" :key="plan" :name="plan" @click="update(plan)" ></plan-component>
    </div>
</template>

<script>
import PlanComponent from "./PlanComponent.vue";

export default {
  name: "PlanesComponent",
  components: {
    PlanComponent,
  },
  data() {
    return {
      planes: [
        "plan 1 - Principiante",
        "plan 2 - Intermedio",
        "plan 3 - Avanzado",
        "plan 4 - Master"
      ],
      value: 50,
    };
  },
  methods: {
      update(value){
          this.$emit('pasarDato',value)
      }
  },
};
</script>

<style  scoped>
</style>