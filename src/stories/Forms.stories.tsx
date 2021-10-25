import React from "react";
import { storiesOf } from "@storybook/react";
import { LoginForm, SignUpForm } from "../components/Requirements";

const stories = storiesOf("React-Singalr-Components", module);

stories.add("LoginForm", () => {
  return <LoginForm />;
});

stories.add("SignUpForm", () => {
  return <SignUpForm />;
});
