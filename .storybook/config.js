import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../components", true, /.stories.tsx?$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

import "../components/globalStyles";

addDecorator(withKnobs);
configure(loadStories, module);
