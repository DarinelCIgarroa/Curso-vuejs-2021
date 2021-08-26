<template>
  <div class="container">
    <header-component></header-component>
    <my-component></my-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import MyComponent      from './components/MyComponent'
import HeaderComponent  from './components/HeaderComponent.vue'
import FooterComponent  from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    MyComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>>

