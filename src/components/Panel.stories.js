import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import Panel from "./Panel.vue";

const story = storiesOf("Panel", module);

story.add(
  "nomal",
  () => ({
    components: { Panel },
    props: {
      heading: { default: `<p>title</p>` },
      body: { default: `<p>body</p>` },
      footer: { default: `<p>footer</p>` }
    },
    template: `<Panel :heading="heading" :body="body" :footer="footer"></Panel>`
  }),
  {
    info: {}
  }
);

story.add(
  "body",
  () => ({
    components: { Panel },
    props: {
      body: { default: `<p>body</p>` }
    },
    template: `<Panel :body="body"></Panel>`
  }),
  {
    info: {}
  }
);
