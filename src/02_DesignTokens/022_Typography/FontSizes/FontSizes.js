import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const FontSizes = () => {
    const data = useStaticQuery(graphql`
        query FontSizesQuery {
            designTokensJson(name: { eq: "$font-sizes" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const VariableName = data.designTokensJson.name // Variable name
    const Name = VariableName.substring(1) // Remove `$` from variable name
    const TokenName = Name.replace(/-/g, " ") // Replace hyphens `-` with space ` `

    return (
        <>
            <h2
                style={{
                    textTransform: "capitalize",
                    marginTop: "80px",
                    marginBottom: "10px",
                    lineHeight: "1",
                }}
            >
                {TokenName.slice(0, -1)} Tokens
            </h2>
            <p className="css-1p8ieni">
                All font sizes in this design system have a ratio of 1.250,
                known as the Major Third type scale. This means that each size
                is multiplied or divided by 1.250 from the previous size,
                starting with the base size (1rem / 16px), and rounded. Custom
                text (any non-existing typography component) should use a font
                size from this list.
            </p>

            <Canvas
                style={{
                    margin: "0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {data.designTokensJson.mapValue.map(node => (
                        <p
                            style={{
                                fontWeight: 700,
                                fontSize: `${node.compiledValue}`,
                                lineHeight: 1,
                                marginBottom: "16px",
                            }}
                        >
                            {node.name} Visual Type Scale
                        </p>
                    ))}
                </div>
            </Canvas>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    font-size({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>
                                        {node.compiledValue} /{" "}
                                        {node.compiledValue.slice(0, -3) * 16}
                                        px
                                    </span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        font-size: font-size(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FontSizes
