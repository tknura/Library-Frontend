# Library-Frontend <!-- omit in toc -->

Heroo Parent application created using **React**, **React Query** and **TypeScript**.

If you have problems with the code in this repository, please file issues & bug reports [here](https://github.com/tknura/2021_BD2_S15_WYLEGLY-UI/issues)!

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Project structure](#project-structure)
  - [Imports and exports](#imports-and-exports)
    - [Import](#import)
    - [Export](#export)
  - [GraphQL flow](#graphql-flow)
  - [Warnings and Errors](#warnings-and-errors)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run the project you will need following globally installed tools:
* **Node.js** v10 or newer ([download](https://nodejs.org/en/download/), [nvm](https://github.com/nvm-sh/nvm), [nvm-windows](https://github.com/coreybutler/nvm-windows))

## Development

### Project structure

The basic structure of the project is as follows:

```
📦project
 ┗ 📂src
   ┣ 📂components       # common components
   ┃  ┣ 📂data          # components for showing simple data
   ┃  ┣ 📂forms         # form components
   ┃  ┣ 📂navigation    # components which are used for navigating
   ┃  ┣ 📂providers     # hoc for contexts
   ┃  ┗ 📂routes        # routes declaration componnets
   ┣ 📂constants        # project constant values
   ┣ 📂i18n             # internacionalizations
   ┣ 📂schemas          # validation schemas
   ┣ 📂hooks            # common hooks
   ┣ 📂screens          # feature scoped screens with their components
   ┣ 📂types            # typescript types
   ┗ 📂utils            # common utility functions
```

When creating a new directory in the tree, add it in the description.

### Imports and exports

#### Import

The project supports absolute imports from the `src` directory. Preferred import method depends on the location of the imported file. If the file is located higher in the folder tree the import should be absolute, if the file is located in the same folder or nested we use relative import.

Example file structure:

```
📦project
 ┗ 📂src
   ┣ 📂screens
   ┃ ┣ 📂AuthScreen.tsx
   ┃ ┃  ┣ 📜AuthScreen.styles.tsx
   ┃ ┃  ┗ 📜AuthScreen.tsx
   ┗ 📂components
     ┗ 📂forms
       ┗ 📂SignInForm
         ┣ 📜SignInForm.styles.tsx
         ┗ 📜SignInForm.tsx
```

Example use cases:

Import of `SignInForm` in `SignInScreen`:

✅ Correct
```
import { SignInForm } from './SignInForm'
```
❌ Wrong
```
import { SignInForm } from 'screens/SignInForm'
```

Import of `TextInput` in `SignInForm`:

✅ Correct
```
import { TextInput } from 'components/TextInput'
```
❌ Wrong
```
import { TextInput } from '../components/TextInput'
```

#### Styling

Declare styled-components in <ComponentName>.styles.tsx file, then import styles into component as:
 
```
import * as Styled from '<ComponentName>.styles'
```

Props used only for styling in styled components should be declared as transient props ($ prefix). Example:
```
const Comp = styled.div`
  color: ${props =>
    props.$draggable || 'black'};
`

render(
  <Comp $draggable="red" draggable="true">
    Drag me!
  </Comp>
)
```

#### Export

Do not use `export default`  in the project. Each `export` should be named to make it easier to automaticaly import types and to assist IDE in code refactoring.

