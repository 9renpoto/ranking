import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Hero, HeroInner } from ".";

storiesOf("Atoms.Hero", module).add("default", () => (
  <Hero>
    <HeroInner>Hero</HeroInner>
  </Hero>
));
