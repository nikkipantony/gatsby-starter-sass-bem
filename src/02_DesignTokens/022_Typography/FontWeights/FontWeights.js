import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const FontWeights = () => {
    const data = useStaticQuery(graphql`
        query FontWeightsQuery {
            designTokensJson(name: { eq: "$font-weights" }) {
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
                Typeface families come with a range of possible font weights
                (boldness). These typically have a scale from 100 (Thin) through
                to 700 (Bold) and then to 900 (known as Black). By specifying
                specific font weights to be used within the design system we
                help simplify the typography of the system and help create
                better uniformity throughout the UI as a whole.
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
                                textTransform: "capitalize",
                                fontWeight: `${node.compiledValue}`,
                                fontSize: "2rem",
                                lineHeight: 1,
                                marginBottom: "16px",
                            }}
                        >
                            {node.compiledValue} {node.name} Font Weight
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
                                    font-weight({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        font-weight: font-weight(
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

export default FontWeights
