<template>
  <div class="container">
    <h1 class="text-center">Productos</h1>
    <div class="productos-container">
      <div
        class="card"
        style="width: 18rem"
        v-for="item in productos"
        :key="item"
      >
        <img
          src="https://via.placeholder.com/200x100/O https://placeholder.com/"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.titulo }}</h5>
          <p class="card-text">
            {{ item.description }}
          </p>
          <router-link :to="{name:'Producto', params:{producto: item } }" class="btn btn-success btn-sm">Ver detalle</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        { titulo: "producto 1", description: "descripcion del producto 1", precio: 250 },
        { titulo: "producto 2", description: "descripcion del producto 2", precio: 210 },
        { titulo: "producto 3", description: "descripcion del producto 3", precio: 2530 },
        { titulo: "producto 4", description: "descripcion del producto 4", precio: 1240 },
        { titulo: "producto 5", description: "descripcion del producto 5", precio: 461 },
        { titulo: "producto 6", description: "descripcion del producto 6", precio: 2942},
      ],
    };
  },
};
</script>

<style scoped>
.card{
  border: black solid 0.5px;
}
.productos-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card{
  margin: 5px;
}
</style>