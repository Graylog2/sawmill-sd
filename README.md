# Sawmill
## Design System by Graylog

![Shield.io Badge](https://shields.io/npm/v/@graylog/sawmill-sd)

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
