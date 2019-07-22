import { storiesOf } from "@storybook/vue";
import Navbar from "./Navbar.vue";
// import { Navbar } from "../../dist/my-component.min";

const story = storiesOf("Navbar", module);

story.add(
  "nomal",
  () => ({
    components: { Navbar },
    template: `<Navbar title="タイトル" nomal />`
  }),
  {
    info: {}
  }
);
