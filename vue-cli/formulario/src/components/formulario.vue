<template>
  <div class="container-sm">
    <h2>Formulario de datos:</h2>
    <form class="col-5">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Ingresa tu nombre"
            v-model="datosPersonas.nombre"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder="Ingresa tu correo"
            v-model="datosPersonas.email"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Mensaje</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="mensaje"
          placeholder="Escribe tu mensaje"
        ></textarea>
      </div>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="sendEmail"
              value="envio de email"
              v-model="emailOptions"
            />
            <label class="form-check-label" for="sendEmail">
              Enviar Email
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="sendCopy"
              value="guardar copia"
              v-model="emailOptions"
            />
            <label class="form-check-label" for="sendCopy">
              guardar una copia
            </label>
          </div>
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Sexo</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="SexoRadio"
              id="radioMasculino"
              value="masculino"
              v-model="genero"
              checked
            />
            <label class="form-check-label" for="radioMasculino">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="SexoRadio"
              id="radioFemenino"
              value="femenino"
              v-model="genero"
            />
            <label class="form-check-label" for="radioFemenino">
              femenino
            </label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">
        <p>Horario</p>
        <label class="visually-hidden" for="specificSizeSelect"
          >Preference</label
        >
        <select class="form-select" id="specificSizeSelect" v-model="horario">
          <option v-for="item in horarios" :key="item" :selected="item == 'mañana'">{{ item }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario">Enviar Datos</button>
    </form>
    <!-- Mostrar datos -->
    <div v-show="datos" class="row">
      <div class="col-xs12 col-sm-8 col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Los datos ingresados son:</h3>
          </div>
          <div class="panel-body">
            <p><strong>Nombre:</strong>  {{ datosPersonas.nombre }}</p>
            <p><strong>Email:</strong> {{ datosPersonas.email }}</p>
            <p style="white-space:pre"><strong>Mensaje enviado:</strong> {{ mensaje }}</p>
            <p><strong>Opción de envio:</strong></p>
            <ul v-for="item in emailOptions" :key="item">
              <li>{{ item }}</li>
            </ul>
            <p><strong>Sexo:</strong> {{ genero }}</p>
            <p><strong>Horario:</strong> {{ horario }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      datosPersonas: {
        nombre: "",
        email: "",
      },
      mensaje: "",
      emailOptions: [],
      genero: 'masculino',
      horario: 'mañana',
      horarios:['Mañana','Tarde','Noche'],
      datos: false
    };
  },
  methods:{
    enviarFormulario(){
      alert('Formulario enviado')
      this.datos = true
    }
  }
};
</script>

<style scoped>
.panel-body {
  padding: 10px;
  width: auto;
  margin: 20px;
}
</style>