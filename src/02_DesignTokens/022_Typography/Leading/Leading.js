import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h2 style={Title}>{TokenName}</h2>
            <p className="css-1p8ieni">Description.</p>

            <div
                style={{
                    marginBottom: "40px",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <p
                        style={{
                            lineHeight: `${node.compiledValue}`,
                            fontWeight: 700,
                            fontSize: "2rem",
                            marginBottom: "16px",
                        }}
                    >
                        Leading {node.compiledValue}
                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "1.125rem",
                                marginLeft: "14px",
                            }}
                        >
                            leading({node.name})
                        </span>
                    </p>
                ))}
            </div>

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
        </section>
    )
}

export default Leading
