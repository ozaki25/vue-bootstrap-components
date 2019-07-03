import { storiesOf } from "@storybook/vue";
import Container from "./Container.vue";
// import { Container } from "../../dist/my-component.min";

const story = storiesOf("Container", module);

story.add("nomal", () => ({
  components: { Container },
  template: `
    <Container>
      <table style="width: 100%;" border="1">
        <thead>
          <tr>
            <th>テスト</th>
            <th>テスト</th>
            <th>テスト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
        </tbody>
      </table>
    </Container>
  `
}));

story.add("fluid", () => ({
  components: { Container },
  template: `
    <Container fluid>
      <table style="width: 100%;" border="1">
        <thead>
          <tr>
            <th>テスト</th>
            <th>テスト</th>
            <th>テスト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
        </tbody>
      </table>
    </Container>
  `
}));
