<template>
  <div class="hello container">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h2>{{ $store.getters.nombreCompleto }}</h2>
    <h4>Amigos:</h4>
    <ul>
      <li v-for="(item, index) in $store.state.amigos" :key="index">
        {{ item }}
        <button v-if="$store.state.amigos" class="btn btn-danger btn-sm" @click="$store.dispatch('deleteFriendAction',index)">
          Eliminar
        </button>
      </li>
  </ul>
    <input
      type="text"
      name="amigo"
      id="amigo"
      v-model="amigo"
      @keyup.enter="addFriends"
    />
    <p>
      <button class="btn btn-primary btn-sm" @click.prevent="addFriends">
        Agregar amigo
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      amigo: "",
    };
  },
  methods: {
    addFriends() {
      this.$store.dispatch("addAmigoAction", this.amigo);
      this.amigo = "";
    }
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.btn {
  margin: 4px 0px;
}
</style>
