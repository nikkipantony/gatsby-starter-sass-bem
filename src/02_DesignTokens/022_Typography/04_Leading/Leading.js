import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Leading = () => {
    const data = useStaticQuery(graphql`
        query LeadingQuery {
            designTokensJson(name: { eq: "$leading" }) {
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
                                lineHeight: `${node.compiledValue}`,
                                fontWeight: 700,
                                fontSize: "2rem",
                                maxWidth: "500px",
                                color: "#000013",
                                background: "rgba(0, 0, 19, .1)",
                                borderTop: "2px solid #000013",
                                borderBottom: "2px solid #000013",
                                padding: "0 10px",
                                marginBottom: "16px",
                            }}
                        >
                            {node.compiledValue} {node.name} Leading
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
                                    leading({node.name})
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
                                        line-height: leading(
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

export default Leading
