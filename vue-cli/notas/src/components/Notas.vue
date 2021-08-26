<template>
  <div class="content-cards">
    <div class="card border-primary mb-3" style="max-width: 18rem" v-for="(item, index) in value" :key="item">
      <button type="button" class="btn-close text-white" aria-label="Close" @click="indexNote(index)"></button>
      <div class="card-header">{{ item.titulo}}</div>
      <div class="card-body">
        <h5 class="card-title text-muted">{{ item.fecha }}</h5>
        <p class="card-text">
          {{ item.texto }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notas",
  props: {
    value: Object,
  },
  methods: {
    indexNote(value) {
      this.$emit("indexNote", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-cards {
  display: flex;
  flex-wrap: wrap;
  /* background: green; */
}
.card {
  margin: 20px;
  max-width: 20xp;
  max-width: 230px !important;
}
</style>
