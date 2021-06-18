<template>
  <div class="block border mt-6 ml-12 w-1/4 rounded-md min-h-1/4 border-celeste cursor-pointer">
    <div class="rounded-md">
        <img class="image rounded" src="../assets/pizza.jpg" alt="">
    </div>
    <div class="line border border-celeste"></div>
    <div>
        <label for="">Pizza</label>
        <br>
        <span>Description goes here</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>