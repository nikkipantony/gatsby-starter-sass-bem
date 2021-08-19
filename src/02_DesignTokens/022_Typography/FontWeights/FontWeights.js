import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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

    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    const TableHeading = {
        textTransform: "capitalize",
    }

    return (
        <section>
            <h2 style={Title}>{TokenName}</h2>
            <p className="css-1p8ieni">
                The `font-weight` CSS property sets the weight (or boldness) of
                a font.
            </p>

            <div
                style={{
                    marginBottom: "40px",
                }}
            >
                <table
                    className="docblock-argstable css-6hhrgj"
                    style={{ textAlign: "left" }}
                >
                    <thead className="docblock-argstable-head">
                        <tr>
                            <th style={TableHeading}>{TokenName}</th>
                        </tr>
                    </thead>
                    <tbody className="docblock-argstable-body">
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    {data.designTokensJson.mapValue.map(
                                        node => (
                                            <p
                                                style={{
                                                    fontWeight: `${node.compiledValue}`,
                                                    fontSize: "2rem",
                                                    lineHeight: 1,
                                                    marginBottom: "16px",
                                                }}
                                            >
                                                Font Weight {node.compiledValue}
                                            </p>
                                        )
                                    )}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        </section>
    )
}

export default FontWeights
