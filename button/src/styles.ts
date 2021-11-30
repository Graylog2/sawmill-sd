import { css } from "styled-components";

const styles = (variantColors) =>
  Object.keys(variantColors).map((variantState) => {
    return Object.keys(variantColors[variantState]).map((variantAttribute) => {
      return Object.keys(variantColors[variantState][variantAttribute]).map(
        (variantName) => {
          if (variantState === "base") {
            return css`
              &.btn-${variantName} {
                background-color: var(
                  ${variantColors[variantState].background[variantName]}
                );
                border-color: var(
                  ${variantColors[variantState].border[variantName]}
                );
                color: var(${variantColors[variantState].text[variantName]});
                transition: background-color 150ms ease-in-out,
                  border 150ms ease-in-out, color 150ms ease-in-out;
              }
            `;
          }

          if (variantState === "disabled") {
            return css`
              &.btn-${variantName} {
                &[disabled],
                &.disabled {
                  background-color: var(
                    ${variantColors[variantState].background[variantName]}
                  );
                  border-color: var(
                    ${variantColors[variantState].border[variantName]}
                  );
                  color: var(${variantColors[variantState].text[variantName]});

                  :hover {
                    background-color: var(
                      ${variantColors[variantState].background[variantName]}
                    );
                    border-color: var(
                      ${variantColors[variantState].border[variantName]}
                    );
                    color: var(
                      ${variantColors[variantState].text[variantName]}
                    );
                  }
                }
              }
            `;
          }

          if (variantState === "active") {
            return css`
              &.btn-${variantName} {
                &.active {
                  background-color: var(
                    ${variantColors[variantState].background[variantName]}
                  );
                  border-color: var(
                    ${variantColors[variantState].border[variantName]}
                  );
                  color: var(${variantColors[variantState].text[variantName]});

                  :hover {
                    background-color: var(
                      ${variantColors[variantState].background[variantName]}
                    );
                    border-color: var(
                      ${variantColors[variantState].border[variantName]}
                    );
                    color: var(
                      ${variantColors[variantState].text[variantName]}
                    );
                  }
                }
              }
            `;
          }

          if (variantState === "hover") {
            return css`
              &.btn-${variantName} {
                :hover {
                  background-color: var(
                    ${variantColors[variantState].background[variantName]}
                  );
                  border-color: var(
                    ${variantColors[variantState].border[variantName]}
                  );
                  color: var(${variantColors[variantState].text[variantName]});
                }
              }
            `;
          }
        }
      );
    });
  });

export default styles;
