<template>
<div class="bg-mx-blue-purple inline-block w-full">
    <img class=" inline-block float-left" src="../assets/logo.png" alt="">
    <div class="nav inline-block pr-72 pt-16"><ul>
        <router-link to="/"><li class="float-left pr-8 cursor-pointer  hover:text-white hover:underline">Home</li></router-link>
        <router-link to="/About"><li class="flex cursor-pointer hover:text-white hover:underline">About</li></router-link>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style>
  img {
    max-height: 100px;
  }
</style>