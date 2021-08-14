/*
var tarea = document.getElementById('tarea');
var crearTarea = document.getElementById('crearTarea');
var listarTareas = document.getElementById('listarTareas');


crearTarea.addEventListener('click', function(){
    var nuevaTarea = tarea.value;
    var li = document.createElement('li');
    li.append(nuevaTarea);
    listarTareas.appendChild(li);
    tarea.value = '';
 });
*/

Vue.createApp({
    data() {
        return {
            tareas: [],
            valor: ''
        }
    },
    methods: {
        agregarTarea() {
            this.tareas.push(this.valor),
                this.valor = ''
        }
    },
}).mount('#app')
console.log('test');

