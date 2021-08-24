/*
 * Ally Custom Storybook Theme
 * Edit the custom Storybook theme from this file.
 * Extended in `preview-head.html` and `manager-header.html`
 * Storybook Theme Configuration: https://storybook.js.org/docs/configurations/theming
 *
 */

// Import the `create()` function to generate a new theme
import { create } from "@storybook/theming/create"

// Set custom storybook theme variables
export default create({
    // Base theme - Either "light" or "dark"
    base: "light", // Required for theme to work

    // Theme base colours
    colorPrimary: "#000013",
    colorSecondary: "#000013",

    // UI colours
    appBg: "#fcfcfc",
    appContentBg: "#fcfcfc",
    appBorderColor: "#ffd700",
    appBorderRadius: 0,

    // Typography
    fontBase: '"Arimo", sans-serif',
    fontCode: "monospace",

    // Text colours
    textColor: "#000013",
    textInverseColor: "#000013",

    // Toolbar and active colours
    barTextColor: "#000013",
    barSelectedColor: "#000013",
    barBg: "#ffd700",

    // Form colours
    inputBg: "#fcfcfc",
    inputBorder: "#ffd700",
    inputTextColor: "#000013",
    inputBorderRadius: 0,

    // Branding
    brandTitle: "Ally Design System Starter Kit",
    brandUrl: "/?path=/story/get-started-introduction--page",

    // Replace brand title with image
    // brandImage: "https://placehold.it/350x150",
})
