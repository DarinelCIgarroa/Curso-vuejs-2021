<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">titulo</th>
          <th scope="col">descripcion</th>
        </tr>
      </thead>
      <tbody  v-for="post in posts" :key="post.id">
        <tr>
          <th scope="row">{{ post.id }}</th>
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data(){
   return{
      posts:[
      {id: 1, title:'Libros', description:'Los mejores libros'},
      {id: 2, title:'Cursos', description:'Los mejores cursos'},
    ]
   }
  }
};
</script>

<style>
  
</style>