/*
 * Storybook Preview Configuration
 *
 * Configure Storybook global decorators and parameters in this file.
 *
 * Storybook Manager & Preview Configuration: https://storybook.js.org/docs/configurations/overview/#manager--preview
 */

// Import `focus-visible` globally within storybook so it is applied in component stories
import "focus-visible"

// Import global styling with loaders to compile component Sass/Scss styling
import "!style-loader!css-loader!sass-loader!../src/10_Styles/Main.scss"

// Import Storybook Actions addon
import { action } from "@storybook/addon-actions"

// Import addParameters from React Storybook
import { addParameters } from "@storybook/react"

// Import DocsPage and DocsContainer from Doc Blocks
import { DocsPage, DocsContainer } from "@storybook/addon-docs"

// Set up the Docs parameter including the DocsPage for rendering the page, a container, and various configuration
// options, such as extractComponentDescription for manually extracting a component description
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
})

// Use with Gatsby V3

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// global.__PATH_PREFIX__ = ""
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}

// Used with Gatsby V2

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
// global.___loader = {
//     enqueue: () => {},
//     hovering: () => {},
// }
// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
// global.__PATH_PREFIX__ = ""
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
// window.___navigate = pathname => {
//     action("NavigateTo:")(pathname)
// }

// Custom Viewports for the Storybook Viewport Addon
// const customViewports = {
//     iphone5: {
//         name: "iPhone 5",
//         styles: {
//             height: "568px",
//             width: "320px",
//         },
//         type: "mobile",
//     },
//     iphone6: {
//         name: "iPhone 6",
//         styles: {
//             height: "667px",
//             width: "375px",
//         },
//         type: "mobile",
//     },
//     iphone6p: {
//         name: "iPhone 6 Plus",
//         styles: {
//             height: "736px",
//             width: "414px",
//         },
//         type: "mobile",
//     },
//     iphone8p: {
//         name: "iPhone 8 Plus",
//         styles: {
//             height: "736px",
//             width: "414px",
//         },
//         type: "mobile",
//     },
//     iphonex: {
//         name: "iPhone X",
//         styles: {
//             height: "812px",
//             width: "375px",
//         },
//         type: "mobile",
//     },
//     iphonexr: {
//         name: "iPhone XR",
//         styles: {
//             height: "896px",
//             width: "414px",
//         },
//         type: "mobile",
//     },
//     iphonexsmax: {
//         name: "iPhone XS Max",
//         styles: {
//             height: "896px",
//             width: "414px",
//         },
//         type: "mobile",
//     },
//     ipad: {
//         name: "iPad",
//         styles: {
//             height: "1024px",
//             width: "768px",
//         },
//         type: "tablet",
//     },
//     ipad10p: {
//         name: "iPad Pro 10.5-in",
//         styles: {
//             height: "1112px",
//             width: "834px",
//         },
//         type: "tablet",
//     },
//     ipad12p: {
//         name: "iPad Pro 12.9-in",
//         styles: {
//             height: "1366px",
//             width: "1024px",
//         },
//         type: "tablet",
//     },
//     kindleFire2: {
//         name: "Kindle Fire 2",
//         styles: {
//             width: "600px",
//             height: "963px",
//         },
//     },
//     kindleFireHD: {
//         name: "Kindle Fire HD",
//         styles: {
//             width: "533px",
//             height: "801px",
//         },
//     },
//     galaxys5: {
//         name: "Galaxy S5",
//         styles: {
//             height: "640px",
//             width: "360px",
//         },
//         type: "mobile",
//     },
//     galaxys9: {
//         name: "Galaxy S9",
//         styles: {
//             height: "740px",
//             width: "360px",
//         },
//         type: "mobile",
//     },
//     nexus5x: {
//         name: "Nexus 5X",
//         styles: {
//             height: "660px",
//             width: "412px",
//         },
//         type: "mobile",
//     },
//     nexus6p: {
//         name: "Nexus 6P",
//         styles: {
//             height: "732px",
//             width: "412px",
//         },
//         type: "mobile",
//     },
//     pixel: {
//         name: "Pixel",
//         styles: {
//             height: "960px",
//             width: "540px",
//         },
//         type: "mobile",
//     },
//     pixelxl: {
//         name: "Pixel XL",
//         styles: {
//             height: "1280px",
//             width: "720px",
//         },
//         type: "mobile",
//     },
// }

// Custom Addon Parameters
// export const parameters = {
//     // Add Custom Viewports for the Storybook Viewport Addon
//     viewport: { viewports: customViewports },
//     // Enable expanded mode globally in Controls to show property documentation alongside your controls
//     // controls: { expanded: true },
// }
