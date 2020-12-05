<template>
  <div class="home">
    <HelloWorld msg="Welcome to Trips"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Trips',
  components: {
    HelloWorld
  }
}
</script>
