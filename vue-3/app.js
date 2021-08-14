
const NumList = {
    props: {
        numero: {
            type: Number,
            required: true
        }
    },
    template:
        `
        <div v-bind:class="getClass(numero)"> 
            {{ numero }}
        </div>
    `,
    methods: {
        esPar(numero) {
            return numero % 2 == 0
        },
        getClass(numero) {
            if (this.esPar(numero)) {
                return 'rojo'
            } else {
                return 'azul'
            }
        }
    }
}

const App = {
    components: {
        NumList
    },
    template:
        `
        <div v-for="numero in numeros">
            <NumList :numero="numero"/>
        </div>
        `
    ,
    data() {
        return {
            contador: 0,
            numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            inputValue: null,
            error: ''
        }
    },

    methods: {
        incrementarContador() {
            this.contador++;
        },
        esPar(valor) {
            return valor % 2 == 0 && valor != 0
        },
        getClass(numero) {
            if (this.esPar(numero)) {
                return 'rojo';
            }
            return 'azul';
        },

        validarInput() {
            let inputName = document.querySelector('#name');
            if (this.inputValue.length < 5) {
                inputName.style.borderColor = "red"
                this.error = "Debe contener al menos 5 letras"
            } else {
                inputName.style.borderColor = "green"
                this.error = "¡Excelente!"
            }
        }
    },

    computed: {

        listarNumerosPares() {
            return this.numeros.filter((valor) => {
                return this.esPar(valor);
            });
        },

    },
}



Vue.createApp(App).mount('#app')