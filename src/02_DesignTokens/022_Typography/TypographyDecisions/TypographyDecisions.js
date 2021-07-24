import React from "react"

const TypographyDecisions = () => {
    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section
            style={{
                marginBottom: "40px",
            }}
        >
            <h2
                style={{
                    marginTop: "80px",
                }}
            >
                Typography Decisions
            </h2>
            <p className="css-1p8ieni">Styling...</p>

            <div
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Headings</h3>
                <p>Heading decisions...</p>

                <div
                    style={{
                        marginTop: "30px",
                        marginBottom: "40px",
                    }}
                >
                    <h1>H1 Heading 1</h1>
                    <h2>H2 Heading 2</h2>
                    <h3>H3 Heading 3</h3>
                    <h4>H4 Heading 4</h4>
                    <h5>H5 Heading 5</h5>
                    <h6>H6 Heading 6</h6>
                </div>
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
                    <tr>
                        <td className="css-4lbn0a">
                            <span className="css-in3yi3">?</span>
                        </td>
                        <td>
                            <div className="css-1521b8c">
                                <span>?</span>
                            </div>
                            <div className="css-fimcbu"></div>
                        </td>
                        <td style={{ width: "0" }}>
                            <span>-</span>
                        </td>
                        <td style={{ width: "50% !important" }}>
                            <pre style={{ margin: 0 }}>
                                <code>?</code>
                            </pre>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default TypographyDecisions
