<template>
  <div class="planes">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PlanComponent',
  props:{
    name: String
  }
}
</script>

<style scoped>
  .planes{
    margin: 10px;
    width: 400px;
    height: 50px;
    background: #aaa0a0;
    padding-left: 30px;
    padding-top: 5px;
    border-radius: 5px;
    
    cursor: pointer;
  }
  .planes:hover{
    background: black;
    color: white;
    height: 60px;
    font-size: 20px;
    border: rgb(10, 216, 89) 1px solid;
    transition: 10ms;
    padding-top: 10px;
  }
</style>