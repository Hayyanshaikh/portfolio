import * as React from "react";
import { SVGProps } from "react";
const Security = (props: SVGProps<SVGSVGElement>) => (
  <svg
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#85A4E6"
      d="M12 1 3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm0 11h7c-.5 4.1-3.3 7.8-7 8.9V12H5V6.3l7-3.1V12z"
    />
    <path
      fill="#5C85DE"
      d="M12 1v22c5.2-1.3 9-6.4 9-12V5l-9-4zm7 11c-.5 4.1-3.3 7.8-7 8.9V12h7z"
    />
    <path
      fillRule="evenodd"
      fill="#3367D6"
      d="M21 12h-2s0 .3-.1.6L21 12zM3 12h2v-.6z"
    />
  </svg>
);
export default Security;
