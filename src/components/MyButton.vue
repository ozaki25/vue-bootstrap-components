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

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
button[disabled] {
  cursor: not-allowed;
  opacity: .65;
  filter: alpha(opacity=65);
  pointer-events: none;
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
