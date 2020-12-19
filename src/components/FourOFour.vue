<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
    class="fof-line"
  ></v-sparkline>
</template>

<script>
const gradients = [
  ['#EF6C00', '#039BE5']
]

export default {
  name: 'FourOFour',
  data () {
    return {
      width: 3,
      radius: 3,
      padding: 0,
      lineCap: 'round',
      gradient: gradients[0],
      value: [5, 5, 7, 3, 10, 0, 5, 5, 5, 7, 3, 10, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      gradientDirection: 'left',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false
    }
  }
}
</script>

<style lang="scss" scoped>
.fof-line {
  width: 100%;
  height: 450px;
  padding: 0 15px;

  @media (min-width: 500px) {
      width: 500px;
  }

  @media (min-width: 650px) {
      width: 650px;
  }

  @media (min-width: 960px) {
      width: 800px;
  }
}
</style>
