import { addDecorator, configure } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from 'storybook-addon-vue-info';

addDecorator(withKnobs);
addDecorator(withInfo);

const req = require.context('../src/components/', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
