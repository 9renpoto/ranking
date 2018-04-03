import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../src/components", true, /.stories.tsx?$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

import "../src/components/globalStyles";

addDecorator(withKnobs);
configure(loadStories, module);
