<template lang="es">
 <h1 class="text-center">Detalle del producto:</h1>
     <div class="container">
   
    <div class="productos-container">
      <div
        class="card"
        style="width: 18rem"
      >
        <img
          src="https://via.placeholder.com/200x100/O https://placeholder.com/"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">{{ producto }}</h5>
          <p class="card-text">
            lorem
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    producto: Object
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



