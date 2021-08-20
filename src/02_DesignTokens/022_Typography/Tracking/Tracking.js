import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Tracking = () => {
    const data = useStaticQuery(graphql`
        query TrackingQuery {
            designTokensJson(name: { eq: "$tracking" }) {
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
                {TokenName} Tokens
            </h2>
            <p className="css-1p8ieni">Description.</p>

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
                                letterSpacing: `${node.compiledValue}`,
                                fontWeight: 700,
                                fontSize: "2rem",
                                marginBottom: "16px",
                            }}
                        >
                            Tracking {node.compiledValue}
                            <span
                                style={{
                                    letterSpacing: "normal",
                                    fontSize: "1.125rem",
                                    marginLeft: "14px",
                                }}
                            >
                                tracking({node.name})
                            </span>
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
                                    tracking({node.name})
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
                                        letter-spacing: tracking(
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

export default Tracking
