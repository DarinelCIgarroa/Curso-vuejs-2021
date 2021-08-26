<template>
 <button :style="{color, background}" :disabled="disabled">
     Botón
 </button>
</template>

<script>
export default({
    name: 'MyButtonComponent',
    props: {
        color: String,
        background: String,
        disabled: Boolean
    }
})
</script>

<style scoped>
    button{
        padding: 10px 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        cursor: pointer;
        border-radius: 10%;
        border:0px;
    }
    button:hover{
        filter: brightness(120%);
    }
    button:disabled{
        opacity:0.2;
    }
</style>