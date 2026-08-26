import React from "react"
import { Analytics } from "@vercel/analytics/react"
import Seo from "./src/components/seo"

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([<Seo key="seo" />]);
  
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