/*
 * Storybook Manager Configuration
 *
 * Manage Storybook UI options in this file.
 *
 * Storybook Manager & Preview Configuration: https://storybook.js.org/docs/configurations/overview/#manager--preview
 */

// Import Storybook addons package
import { addons } from "@storybook/addons"

// Import local custom storybook theme from `.storybook/theme.js`
import theme from "./theme"

// Storybook addon configurations
addons.setConfig({
    // Use local custom storybook theme
    theme: theme,
    showNav: true,
    initialActive: "sidebar",
    sidebar: {
        showRoots: true,
        collapsedRoots: [
            "foundations",
            "design-tokens",
            "atoms",
            "molecules",
            "organisms",
            "templates",
            "pages",
        ],
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
})
