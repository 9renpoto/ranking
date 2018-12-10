const { configure, addDecorator } = require("@storybook/react");
const { withKnobs } = require("@storybook/addon-knobs");
const requireContext = require("require-context");

require("../components/globalStyles");

const req = requireContext("../../components", true, /.stories.tsx?$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(withKnobs);
configure(loadStories, module);
