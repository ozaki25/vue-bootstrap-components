import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
// import MyButton from './MyButton.vue';
import MyButton from "../../dist/my-component";

const story = storiesOf("MyButton", module);

story.add("nomal", () => ({
  components: { MyButton },
  props: {
    text: {
      default: text("Text", "Hello")
    },
    disabled: {
      default: boolean("disabled", false)
    }
  },
  methods: {
    onClick: action("on click")
  },
  template: `<MyButton :onClick="onClick" :disabled="disabled" >{{text}}</MyButton>`
}));

story.add("primary", () => ({
  components: { MyButton },
  props: {
    text: {
      default: text("Text", "Hello")
    },
    disabled: {
      default: boolean("disabled", false)
    }
  },
  methods: {
    onClick: action("on click")
  },
  template: `<MyButton :onClick="onClick" :disabled="disabled" primary>{{text}}</MyButton>`
}));

story.add("disabled", () => ({
  components: { MyButton },
  props: {
    text: {
      default: text("Text", "Hello")
    }
  },
  methods: {
    onClick: action("on click")
  },
  template: `<MyButton @click.native="onClick" disabled>{{text}}</MyButton>`
}));
