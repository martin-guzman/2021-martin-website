# Martin Guzman GatsbyJS 3.0 Website 

A personal website and blog for Martin Guzman, a Cyber Threat Intelligence Analyst.

Built with Gatsby.js 3.0 from the gatsby-starter-hello-world.
https://github.com/gatsbyjs/gatsby-starter-hello-world

The site is responsive with fluid typography and UI Elements designed and selected to improve accessibility.

## Features

### Style and UI Elements

UI utilizes [Styled Components](https://styled-components.com/) CSS-in-JS library. For global styles elements, styled-components' createGlobalStyle and ThemeProvider features imported into root-wrapper.js.

Theme properties/elements are located in './src/themes/theme'.

Styled-components and Gatsby style elements are located in './src/elements/'. Elements are sorted into .js for example, links-hrefs.js contains the styled-components for href's and Gatsby's Link component. Each  of the .js files are imported and exported from './src/elements/index.js'. These styled-components can then be imported into any page or component. 


### Related Links

- [Gatsby](https://www.gatsbyjs.org/) Gatsby
- [Styled Components](https://styled-components.com/) Style CSS in modern JavaScript/React components.
- [WebAIM](https://webaim.org/) Resources for web accessibility.