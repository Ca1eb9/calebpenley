import React from "react"
import { Analytics } from "@vercel/analytics/react"

export const onClientEntry = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === null || savedMode === 'true') {
    document.body.classList.add('night');
  }
};

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Analytics />
    </>
  );
};