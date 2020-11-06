import { createGlobalStyle } from "styled-components"
import { BreakPoints } from "./BreakPoints"
import { ColorStyles } from "./ColorStyles"

export const GlobalStyles = createGlobalStyle`
:root {

/* COLOR */

--color-text-1: ${({ theme }) =>
  theme === "light" ? ColorStyles.light.text_1 : ColorStyles.dark.text_1};
--color-text-2: ${({ theme }) =>
  theme === "light" ? ColorStyles.light.text_2 : ColorStyles.dark.text_2};

--color-background-1: ${({ theme }) =>
  theme === "light"
    ? ColorStyles.light.background_1
    : ColorStyles.dark.background_1};
--color-background-2: ${({ theme }) =>
  theme === "light"
    ? ColorStyles.light.background_2
    : ColorStyles.dark.background_2};

--color-primary: ${({ theme }) =>
  theme === "light" ? ColorStyles.light.primary : ColorStyles.dark.primary};
--color-secondary: ${({ theme }) =>
  theme === "light" ? ColorStyles.light.secondary : ColorStyles.dark.secondary};


/* --color-text-1-light: #000000;
--color-text-2-light: rgba(0, 0, 0, 0.7);

--color-background-1-light: #F2F6FF;
--color-background-2-light: #E3E8FF;

--color-primary-light: #3913B8;
--color-secondary-light: #2FB5FC;

--color-text-1-dark: #FFFFFF;
--color-text-2-dark: rgba(255, 255, 255, 0.7);

--color-background-1-dark: #1F1F47;
--color-background-2-dark: #1A2151;

--color-primary-dark: #8352FD;
--color-secondary-dark: #00CFFD; */

/* --color-tertiary: hsl(255deg, 85%, 30%);
--color-decorative: hsl(200deg, 75%, 65%); */

/* --color-muted: hsl(210deg, 55%, 92%);
--color-info: hsl(245deg, 100%, 60%);
--color-success: hsl(160deg, 100%, 40%);
--color-error: hsl(340deg, 95%, 50%);
--color-alert: hsl(37deg, 100%, 50%); */

/* FONT */
--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
--line-height: 1.6;
--font-weight-normal: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--font-size-h1: 60px;
--font-size-h2: 40px;
--font-size-h3: 30px;
--font-size-b1: 24px;
--font-size-b2: 20px;
--font-size-text-medium:  17px;
--font-size-text-regular: 15px;
--font-size-text-small:   13px;

@media (max-width: ${BreakPoints.desktop}){
    --font-size-h1: 52px;
    --font-size-h2: 38px;
    --font-size-h3: 30px;
}

@media (max-width: ${BreakPoints.laptop}){
    --font-size-h1: 46px;
    --font-size-h2: 34px;
    --font-size-h3: 28px;
}

@media (max-width: ${BreakPoints.tablet}){
    --font-size-h1: 40px;
    --font-size-h2: 30px;
    --font-size-h3: 26px;
}

@media (max-width: ${BreakPoints.phone}){
    --font-size-h1: 34px;
    --font-size-h2: 28px;
    --font-size-h3: 24px;
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
    font-family: var(--font-family); 
    background: var(--color-background-1);
    color: var(--color-text-1);
}
`
