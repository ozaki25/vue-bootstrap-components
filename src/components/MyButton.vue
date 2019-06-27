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
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    outline: 0;
  }
  &:focus,
  &:active {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  &:focus,
  &:hover,
  &:active {
    color: #333;
    text-decoration: none;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.65;
    filter: alpha(opacity=65);
    pointer-events: none;
  }
}
.nomal {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  &:focus {
    border-color: #8c8c8c;
  }
  &:hover,
  &:active {
    border-color: #adadad;
  }
  &:focus,
  &:hover,
  &:active {
    background-color: #e6e6e6;
  }
}
.primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
</style>
