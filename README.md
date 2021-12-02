<p align="center">
  <a href="#">
    <img alt="Woonkly" height="125" src="https://res.cloudinary.com/trejocode/image/upload/v1586298449/Trejocode/logo_t0otlj.png">
  </a>
</p>

# Trejocode UIKit

Collection of UI Components for trejocode projects

## ⚡️ Quickstart

</br>

Open a terminal:

```bash
npm install @trejocode/uikit
```

</br>

Add **required** font into **index.html**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

</br>

Import stylesheet in your **root app entry**:

```javascript
// app.tsx, app.jsx
import "@trejocode/uikit/dist/trejocode-uikit.css";
```

</br>

Import it:

```javascript
// view.tsx, view.jsx
import { Button } from "@trejocode/uikit";

export const View = () => {
  return (
    <Button variant="primary" size="default">
      Click me
    </Button>
  );
};
```

</br>

## 🌱 Third Party Dependencies

This is a list of dependencies that are user for this module:

- [Storybook]()
- [Tailwindscss]()
- [WindiCSS]()
- [Rollup]()
- [Typescript]()
- [classnames]()
- [React Router DOM]()

</br>

## ⚠️ License

Copyright (c) 2021-present [Woonkly](https://github.com/trejocode) and [Contributors](https://github.com/trejocode/contributors). `@woonkly/uikit` is free and open-source software licensed under the [MIT License](https://github.com/trejocode/uikit/blob/main/LICENSE).
