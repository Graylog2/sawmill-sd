import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "~/theme/src/variables.css";

export const decorators = [
  (Story) => (
    <div style={{ fontSize: "14px" }}>
      <Story />
    </div>
  ),
];
