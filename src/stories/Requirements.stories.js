import React from "react";
import { storiesOf } from "@storybook/react";
import { Requriments } from "../components/Requirements";

const stories = storiesOf("App test", module);

stories.add("App", () => {
  return <Requriments />;
});
