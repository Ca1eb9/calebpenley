import React from "react"
import { Analytics } from "@vercel/analytics/react"

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` });
  
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

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
    </>
  );
};