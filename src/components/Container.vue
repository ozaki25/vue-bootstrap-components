<template>
  <div class="container" :class="{fluid: fluid}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
$min-sm-width: 768px;
$min-md-width: 992px;
$min-lg-width: 1200px;

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: $min-sm-width) {
    width: 750px;
  }
  @media (min-width: $min-md-width) {
    width: 970px;
  }
  @media (min-width: $min-lg-width) {
    width: 1170px;
  }

  &.fluid {
    width: auto;
  }
}
</style>
