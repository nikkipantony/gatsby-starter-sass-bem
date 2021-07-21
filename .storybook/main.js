/*
 * Storybook Main Configuration
 *
 * Declare general storybook configuration in this file.
 *
 * Storybook Main Configuration: https://storybook.js.org/docs/configurations/overview/#main-configuration
 */

// Older WebPack Config used with Gatsby V2 (Kept for reference)
// Require the Docs MDX compiler plugin
// const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")

module.exports = {
    // Declare where storybook stories are located plus file types .mdx and .js
    stories: ["../src/**/*.stories.@(js|mdx)"],

    // Register installed storybook addons
    addons: [
        // Register Docs addon with `/register` to register without presets
        // "@storybook/addon-docs/register",
        // {
        //     name: "@storybook/addon-docs",
        //     options: { configureJSX: false },
        // },
        "@storybook/addon-docs",
        // "@storybook/addon-a11y",
        "@storybook/addon-actions",
        // "@storybook/addon-controls",
        // "@storybook/addon-links",
        // "@storybook/addon-viewport",
        // "storybook-addon-designs",
    ],

    // WebPack Custom Config for use with Gatsby V3

    core: {
        builder: "webpack5",
    },

    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

        // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
        config.module.rules[0].use[0].loader = require.resolve("babel-loader")

        // Use @babel/preset-react for JSX and env (instead of staged presets)
        config.module.rules[0].use[0].options.presets = [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env"),
        ]

        config.module.rules[0].use[0].options.plugins = [
            // Use @babel/plugin-proposal-class-properties for class arrow functions
            require.resolve("@babel/plugin-proposal-class-properties"),

            // Use babel-plugin-remove-graphql-queries to remove graphql queries from components when rendering in storybook
            // While still rendering content from useStaticQuery in development mode
            // TODO Fix useStaticQuery content not rendering in production
            [
                require.resolve("babel-plugin-remove-graphql-queries"),
                {
                    stage:
                        config.mode === `development`
                            ? "develop-html"
                            : "build-html",
                    staticQueryDir: "page-data/sq/d",
                },
            ],
        ]

        return config
    },

    // Older WebPack Config used with Gatsby V2 (Kept for reference)

    // Use Webpack 5
    // core: {
    //     builder: "webpack5",
    // },

    // webpackFinal: async config => {
    //     // Set the NODE_ENV to 'production' by default, to allow babel-plugin-remove-graphql-queries to remove static queries
    //     process.env.NODE_ENV = "production"

    //     // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    //     config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    //     // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    //     config.module.rules[0].use[0].loader = require.resolve("babel-loader")

    //     // Use @babel/preset-react for JSX and env (instead of staged presets)
    //     config.module.rules[0].use[0].options.presets = [
    //         require.resolve("@babel/preset-react"),
    //         require.resolve("@babel/preset-env"),
    //     ]

    //     config.module.rules[0].use[0].options.plugins = [
    //         // Use @babel/plugin-proposal-class-properties for class arrow functions
    //         require.resolve("@babel/plugin-proposal-class-properties"),

    //         // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    //         require.resolve("babel-plugin-remove-graphql-queries"),
    //     ]

    //     // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    //     config.resolve.mainFields = ["browser", "module", "main"]

    //     // Add TypeScript Support
    //     config.module.rules.push({
    //         // Load `.ts` / `.tsx` files
    //         test: /\.(ts|tsx)$/,
    //         loader: require.resolve("babel-loader"),
    //         options: {
    //             presets: [
    //                 [
    //                     "react-app",
    //                     {
    //                         flow: false,
    //                         typescript: true,
    //                     },
    //                 ],
    //             ],
    //             plugins: [
    //                 require.resolve("@babel/plugin-proposal-class-properties"),

    //                 // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    //                 require.resolve("babel-plugin-remove-graphql-queries"),
    //             ],
    //         },
    //     })
    //     config.resolve.extensions.push(".ts", ".tsx")

    //     // Add MDX Support
    //     config.module.rules.push({
    //         // Load `.stories.mdx` / `.story.mdx` files as CSF and generate the docs page from the markdown
    //         test: /\.(stories|story)\.mdx$/,
    //         use: [
    //             {
    //                 // Add JSX Support
    //                 loader: "babel-loader",
    //                 options: {
    //                     plugins: ["@babel/plugin-transform-react-jsx"],
    //                 },
    //             },
    //             {
    //                 // Add MDX Complier
    //                 loader: "@mdx-js/loader",
    //                 options: {
    //                     compilers: [createCompiler({})],
    //                 },
    //             },
    //         ],
    //     })
    //     // Run `source-loader` in story files to show their source code using the `Source` doc block
    //     config.module.rules.push({
    //         test: /\.(stories|story)\.[tj]sx?$/,
    //         loader: require.resolve("@storybook/source-loader"),
    //         exclude: [/node_modules/],
    //         enforce: "pre",
    //     })

    //     return config
    // },
}
