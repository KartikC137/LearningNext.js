## Important Notes and tips:

- ### Use `<Link>` tag over `<a>` to link html files, which loads only the necessary files.
- ### A folder is not Publicly accessible unless a `page.tsx` is added to it.
- ### Prefer Server Side Rendering (SSR) over Client Side (CSR). 
- ### SSR Cannot: 
  - Listen to browser events
  - Access browser APIs
  - Maintain state
  - Use effects

- ### All the components in "app" folder are server components.
- ### `'use client';` in the beginning of file tells nextJS compiler to include this file/component in JS bundles. Also all the dependent components will take its effect.
- ### Prefer Separate files for components that require client side rendering. `/components/RandomButton.tsx` for example.
- ### Use [Json Placeholder dummy API](https://jsonplaceholder.typicode.com/) for sample data.
- ### Whenever possible, fetch data in server components (Next js comes with in built Caching when fetch is called,which can be customised)
- ## Rendering:
### 1. Client Side
### 2. Server Side : 
- ### Static (at build time) 
- ### Dynamic (at request time)



