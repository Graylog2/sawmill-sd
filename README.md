# Sawmill ![Shield.io Badge](https://shields.io/npm/v/@graylog/sawmill-sd)

#### a Design System by Graylog

### Implementation

`yarn add --dev @graylog/sawmill-sd`  
_or_  
`npm install --save-dev @graylog/sawmill-sd`

```tsx
import { theme as sawmillTheme } from '@graylog/sawmill-sd';

const SawmillStyles = createGlobalStyle`
  ${sawmillTheme.css.root}
  ${sawmillTheme.css.noir}
`;

function renderAppContainer(appContainer) {
  ReactDOM.render(
    <React.Fragment>
      <SawmillStyles />
      <App />
    </React.Fragment>,
    appContainer,
  );
}

window.onload = () => {
  const appContainer = document.createElement('div');

  appContainer.id = 'app-root';
  document.body.appendChild(appContainer);
  renderAppContainer(appContainer);
};
```

Currently the app will need to set the `data-sawmill-mode` on the `<body>` tag manually.

_This could probably be a utility that Sawmill offers in the future._
```ts
document.body.dataset.sawmillMode = "teint";
// or
document.body.dataset.sawmillMode = "noir";
```

## Tokens

All theme mode color variables are generated in CSS. The generated JSON file only currently has the default colors.

A new [format](https://amzn.github.io/style-dictionary/#/api?id=registerformat)
or [filter](https://amzn.github.io/style-dictionary/#/api?id=registerfilter) will probably need to be built to properly
support Chakra on Mantine.

### [Colors](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/colors/doc/index.mdx)

Contains all the base colors for brand and variants. You
can [reference](https://amzn.github.io/style-dictionary/#/tokens?id=referencing-aliasing) these colors via their alias
to have the library properly construct variables.

For each color, you will need a `value`, but you can also add a `modeNameValue` that will allow you to generate other
modes. You will notice some `noirValue` set with a different color to generate in the `variables-noir.css`. All these
options can be configured in the root of in the system in `sd.config.js`.

### [Elevations](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/elevations/doc/index.mdx)

There is a bug in the docs where you can't click on the `underneath` variant. Need to resolve this in some way to allow
it to be clickable.

### [Opacity](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/opacity/doc/index.mdx)

These can be used as the alpha values for `rgba`, `hsla`, and the `opacity` property.

### [Radii](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/radii/doc/index.mdx)

Variables for border-radius.

> _I haven't done a full assessment of our usage here, so these options may need to be adjusted to better fit into the existing design._

### [Shadows](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/shadows/doc/index.mdx)

Similiar to Radii, this will be for shadows, but have not done a full usage assessment of the different shadows in 
production today

### [Spacings](https://backlight.dev/doc/f8bLRusG6EujzpCzDM6X/spacings/doc/index.mdx)

Spacings are based off of the font-size using `rem` and then I just converted it manually to pixels. 
There are a lot of ways this could be automated, the existing one is based off of a Fibonacci sequence.

### Breakpoints

These are not yet integrated, we have a few defined in the current system as 
```ts
const breakpointSizes: { [key: string]: number } = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};
```

And they are in-use in a few different places of the app, such as the Header/Navigation bar. 
I didn't implement anything here yet because I wanted to see what the requirements are going to be for using a 
system like Mantine or other UI kit


