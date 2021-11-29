import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../theme/src/variables.css";

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
