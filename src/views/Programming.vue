<template>
  <div class="home">
    <HelloWorld msg="Welcome to Programming"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Programming',
  components: {
    HelloWorld
  }
}
</script>
