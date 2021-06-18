<template>
  <div class="home">
    home page
    <thumbnail />
  </div>
</template>

<script>
// @ is an alias to /src
import thumbnail from '@/components/recThumb.vue'


export default {
  name: 'Home',
  components: {
    thumbnail
  }
}
</script>
