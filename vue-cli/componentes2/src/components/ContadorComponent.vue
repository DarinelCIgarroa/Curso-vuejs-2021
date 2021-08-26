<template>
    <div class="content-contador">
        <button @click="contadorPlus">{{ contador }}</button>
    </div>
</template>
<script>

export default({
    name: 'ContadorComponent',
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        contadorPlus(){
            this.contador++
        }
    }
})

</script>

<style scoped>
button{
    cursor: pointer;
    height: 30px;
    width: 30px;
    border: 0px;
}
button:hover{
    background: darkred;
    color: white;
}
.content-contador{
    background: rgb(29, 27, 27);
    float: left;
    margin: 5px;
}
</style>
