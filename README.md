
# Portfolio V2

The Second iteration of my personal portfolio.

## Stack

Technologies Used:

-   Typescript
-   Javascript
-   NextJS
-   CSS3
-   Styled-Components
-   Jest
-   ESLint
-   Google Analytics

## Layout

This Project split the icons and sections into components while the hooks
included useOnClickOutside and useScrollDirection. The Pages directory uses a
[slug].tsx in order to generate blog pages from MDX from the outside content
folder. Styles included mixins as well as theme folders that contain
styled-components. Lib and utils contian MDX variables as well as other helpful
variables.

I specify the header links as well as colrs and scroll reveal in the config.js
as well as contain types inside types.ts.

```py
/content
/public
/src
    /components
    /hooks
    /lib
    /pages
    /styles
    /utils
    config.ts
    types.ts
.babelrc
.eslintrc.js
next.config.js
next-env.d.ts
vercel.json
tsconfig.json
README.md
LICENSE
package.json
package-lock.json
```

# Credit

Design was inspired by <a href="https://brittanychiang.com/">Brittany Chiang</a>
