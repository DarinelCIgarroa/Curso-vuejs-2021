<template>
  <div class="container">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/usuarios/:darinel">Usuarios</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="Contacto">Contacto</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

a{
  margin: 5px;
}
#nav a {
  font-weight: bold !important;
  color: #2c3e50 !important;
}
#nav a.router-link-exact-active {
  color: #d4126d !important;
} 
</style>
