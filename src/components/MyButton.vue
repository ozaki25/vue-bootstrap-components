<template>
  <button @click="onClick" :class="{nomal: nomal, primary: primary}" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    onClick: {
      type: Function,
      default: null
    },
    nomal: {
      type: Boolean,
      default: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
}
button[disabled] {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  opacity: 0.65;
  pointer-events: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.nomal {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
</style>
