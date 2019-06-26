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
  margin: 0;
  padding: 6px 12px;
  overflow: visible;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.42857143;
  white-space: nowrap;
  text-align: center;
  text-transform: none;
  vertical-align: middle;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

  &:focus,
  &:active {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.65;
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
