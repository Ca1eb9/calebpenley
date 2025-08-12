/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
const React = require("react");
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="night-mode-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var savedMode = localStorage.getItem('darkMode');
            if (savedMode === null || savedMode === 'true') {
              document.body.classList.add('night');
            }
          })();
        `,
      }}
    />,
  ]);
};
