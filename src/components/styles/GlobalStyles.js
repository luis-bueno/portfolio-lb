import { createGlobalStyle } from "styled-components"
import { BreakPoints } from "./BreakPoints"

export const GlobalStyles = createGlobalStyle`
:root {

/* BREAK POINT */
/* --break-point-phone: 640px;
--break-point-tablet: 768px;
--break-point-laptop: 1024px;
--break-point-desktop: 1280px; */

/* COLOR */
--color-text: #000000;
--color-text-black-lighter: rgba(0, 0, 0, 0.7);
--color-text-white: #FFFFFF;
--color-text-white-darker: rgba(255, 255, 255, 0.7);

--color-background: #F2F6FF;
--color-background-blurred: hsla(0deg, 0%, 100%, 0.85);

--color-text: red;

@media (prefers-color-scheme: dark) {
        --color-background: #1F1F47;;
    }


/* --color-primary: hsl(245deg, 100%, 60%);
--color-secondary: hsl(333deg, 100%, 45%);
--color-tertiary: hsl(255deg, 85%, 30%);
--color-decorative: hsl(200deg, 75%, 65%); */

/* --color-muted: hsl(210deg, 55%, 92%);
--color-info: hsl(245deg, 100%, 60%);
--color-success: hsl(160deg, 100%, 40%);
--color-error: hsl(340deg, 95%, 50%);
--color-alert: hsl(37deg, 100%, 50%); */

/* FONT */
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
--line-height-heading: 1.6;
--line-height-text: 1.6;
--font-weight-normal: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--font-size-h1: 60px;
--font-size-h2: 40px;
--font-size-h3: 30px;
--font-size-b1: 24px;
--font-size-b2: 20px;
--font-size-text-medium:  17px;
--font-size-text-caption: 15px;
--font-size-text-small:   13px;

@media (max-width: ${BreakPoints.tablet}){
    --font-size-h1: 20px;
}

/* SPACE */
--space-0-5em: .5em;
--space-1-0em: 1em;
--space-1-5em: 1.5em;
--space-2-0em: 2em;

/* SIZE */



/* SHADOW */
/* --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
--shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);
--shadow-card: 0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6); */


}
body{
    background: var(--color-background);

    


}
`
