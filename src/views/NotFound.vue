<template>
  <div class="not-found d-flex flex-column justify-center align-center">
    <h1 class="fof-title display-4 pr-5 font-weight-regular secondary--text">404</h1>
    <FourOFour/>
  </div>
</template>

<script>
// @ is an alias to /src
import FourOFour from '@/components/FourOFour.vue'

export default {
  name: 'NotFound.vue',
  components: {
    FourOFour
  }
}
</script>

<style lang="scss" scoped>
.fof-title {
  position: absolute;
  top: 20%;
  right: 0%;
  opacity: 0.5;
  animation: fadeIn 700ms ease-in-out 1s both;
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
  }
</style>
