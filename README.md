# Ananya UI

[![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/@alwinsden/ananya-ui)
[![npm downloads](https://img.shields.io/npm/dm/redux.svg?style=flat-square)](https://www.npmjs.com/package/@alwinsden/ananya-ui)

**npm registry:** https://www.npmjs.com/package/@alwinsden/ananya-ui

## Installation and usage

#### Add the library to project
```shell
npm i @alwinsden/ananya-ui
```
#### Import the CSS properties in root file [index.tsx]
```shell
import "@alwinsden/ananya-ui/dist/style.css"
```

#### Adding a default button from library
```javascript
import {AnUIDefaultButton} from "@alwinsden/ananya-ui";
import './App.css';
function App() {
  return (
        <AnUIDefaultButton>
          Click me.
        </AnUIDefaultButton>
  );
}
export default App;

```

## Contributing

#### Clone the repository
```shell
git clone git@github.com:alwinsDen/ananya-ui.git
```

#### Install required dependencies
```shell
npm install
```

#### Create a usable build of the library
```shell
npm run build
```

#### Code reformatting
```shell
prettier . --write
```
