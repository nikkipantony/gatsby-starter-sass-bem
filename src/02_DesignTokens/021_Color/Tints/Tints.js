import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Tints = () => {
    const data = useStaticQuery(graphql`
        query TintsQuery {
            designTokensJson(name: { eq: "$tints" }) {
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
            {/* Edit tints description to be specific to your design system ↓ */}
            <p className="css-1p8ieni">
                These are example tint values. Color tints are based on the
                percentage of white within a color. It is a good idea to scale
                color tint names between 0 and 100 in design systems. This scale
                is based on HSL lightness for simplicity and it's also a good
                ideas to offer just a limited number of shade options to help
                with consistency, avoid endless decision making and assist with
                accessibility compliance.
            </p>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "-40px",
                    width: "100%",
                    marginLeft: "-30px",
                    width: "calc(100% + 80px)",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <figure
                        style={{
                            margin: "0 36px 10px 30px",
                            minWidth: "200px",
                            maxWidth: "200px",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "4px",
                                border: "2px solid #000013",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0 4px 6px 0",
                                backgroundColor: "#18d14c",
                            }}
                        >
                            <div
                                style={{
                                    height: "120px",
                                    width: "100%",
                                    backgroundColor: `#fff`,
                                    borderRadius: "1px",
                                    opacity: `${node.compiledValue}`,
                                }}
                            ></div>
                        </div>
                        <figcaption
                            style={{
                                color: "#000013",
                                fontSize: "1.125rem",
                                fontWeight: "700",
                                textAlign: "left",
                                padding: "1rem 0 2.5rem",
                            }}
                        >
                            tint(brand-color(success), {node.name})
                        </figcaption>
                    </figure>
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
                                    tint(brand-color(success), {node.name})
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
                                        background-color:
                                        tint(brand-color(success),
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

export default Tints
