<template>
    <div>
        <ProductModule />
    </div>
</template>

<script>
import ProductModule from "../modules/products";

export default {
    name: "Home",
    components: {
        ProductModule
    }
};
</script>

<style scoped>
h1 {
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    font-weight: 100;
    font-size: 3em;
    letter-spacing: 0.05em;
    color: #4b4b4b;
}
</style>