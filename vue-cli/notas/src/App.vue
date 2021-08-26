<template>
  <div class="container">
    <div class="mb-3">
      <label for="titulo" class="form-label">Titulo</label>
      <input
        type="text"
        class="form-control"
        id="titulo"
        placeholder="Ingresa el titulo de la nota"
        v-model="nota.titulo"
      />
    </div>
    <div class="mb-3">
      <label for="descripcion" class="form-label">Descripcion:</label>
      <textarea
        class="form-control"
        id="descripcion"
        rows="3"
        placeholder="Descripcion de la nota"
        v-model="nota.texto"
      ></textarea>
    </div>
    <button type="button" class="btn btn-primary" @click="addNote">
      Agregar nota
    </button>
    <notas :value="notas" @indexNote="deleteNote" />
  </div>
</template>

<script>
import Notas from "./components/Notas.vue";

export default {
  name: "App",
  components: {
    Notas,
  },
  data() {
    return {
      nota: {
        titulo: "",
        texto: "",
      },
      notas: [
        {
          titulo: "Vacunarme",
          texto: "Ir a inyectarme contra el COVID 19",
          fecha: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      if (this.nota.titulo.length != 0 && this.nota.texto.length != 0) {
        let { titulo, texto } = this.nota;
        this.notas.push({
          titulo,
          texto,
          fecha: new Date(Date.now()).toLocaleString(),
        });
        this.nota.titulo = "";
        this.nota.texto = "";
      }
    },
    deleteNote(value) {
      this.notas.splice(value, 1);
    },
  },
};
</script>

<style>
#app {
  margin: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
