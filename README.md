# Nuxt and Shoelace Setup

## Install Dependencies
Make sure to install dependencies:

```bash
# npm
npm install @shoelace-style/shoelace
```

## Nuxt Config File
Add to your `nuxt.config.ts`.

Use ViteStaticCopy to copy Shoelace assets.

```js
// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

vite: {
  // Required for Shoelace
  optimizeDeps: {
    include: ['@shoelace-style/shoelace']
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
          dest: path.resolve(__dirname, 'public/shoelace/'),
        },
      ],
    }),
  ],
},
```

Indicate to Nuxt to recognize Shoelace components, avoiding terminal warnings of undefined components.

```js
vue: {
  compilerOptions: {
    isCustomElement: tag => tag.startsWith('sl-')
  },
},
```

Indicate to Nuxt where the Shoelace CSS is and should be used.

```js
css: [
  '@shoelace-style/shoelace/dist/themes/light.css',
  '@shoelace-style/shoelace/dist/themes/dark.css',
],
```

Register the plugin. Make sure to set the plugin to run only on the client side; otherwise, the library won’t work.

```js
plugins: [
  { src: '~/plugins/shoelace.client.ts', mode: 'client' }
],
```

## Plugin Definition

Define the Shoelace base path. In this approach, each component should be imported here.

```js
export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    import('@shoelace-style/shoelace/dist/utilities/base-path').then(({ setBasePath }) => {
      setBasePath('/shoelace');

      import('@shoelace-style/shoelace/dist/components/card/card.js');
      import('@shoelace-style/shoelace/dist/components/button/button.js');
    });
  }
});
```

### Component Usage

Just call the component directly:

```html
<sl-button>Button</sl-button>
```

## Nuxt and Shoelace Docs

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Check out the [components docs](https://shoelace.style/components/button) for more information.