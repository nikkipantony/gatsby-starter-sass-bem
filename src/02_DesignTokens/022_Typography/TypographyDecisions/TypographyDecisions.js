import React from "react"

const TypographyDecisions = () => {
    return (
        <div
            style={{
                marginBottom: "40px",
            }}
        >
            <h2
                style={{
                    marginTop: "80px",
                    marginBottom: "10px",
                }}
            >
                Typography Decisions
            </h2>
            <p className="css-1p8ieni">Styling...</p>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Headings</h3>
                <p>
                    The <code>h1</code> to <code>h6</code> elements represent
                    six levels of section and/or page headings with{" "}
                    <code>h1</code> being at the highest hierarchical level and
                    <code>h6</code> being at the lowest. You should only use one{" "}
                    <code>h1</code> per page. However, using more than one will
                    not result in an error, but using only one is seen as a best
                    practice. Having a single top-level title is also arguably
                    better for screenreader users, and for SEO.
                </p>

                <div
                    style={{
                        marginTop: "30px",
                        marginBottom: "40px",
                    }}
                >
                    <table
                        className="docblock-argstable css-6hhrgj"
                        style={{ textAlign: "left" }}
                    >
                        <thead className="docblock-argstable-head">
                            <tr>
                                <th>Heading examples</th>
                            </tr>
                        </thead>
                        <tbody className="docblock-argstable-body">
                            <tr>
                                <td className="css-4lbn0a">
                                    <span className="css-in3yi3">
                                        <h1>H1 Heading 1</h1>
                                        <h2>H2 Heading 2</h2>
                                        <h3>H3 Heading 3</h3>
                                        <h4>H4 Heading 4</h4>
                                        <h5>H5 Heading 5</h5>
                                        <h6>H6 Heading 6</h6>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Paragraphs</h3>
                <p>
                    The <code>p</code> element represents a paragraph.
                    Paragraphs are represented in visual media as blocks of text
                    separated from adjacent blocks by blank lines and/or
                    first-line indentation. However, in but HTML, paragraphs can
                    be any structural grouping of related content.
                </p>

                <div
                    style={{
                        marginTop: "30px",
                        marginBottom: "40px",
                    }}
                >
                    <table
                        className="docblock-argstable css-6hhrgj"
                        style={{ textAlign: "left" }}
                    >
                        <thead className="docblock-argstable-head">
                            <tr>
                                <th>Paragraph example</th>
                            </tr>
                        </thead>
                        <tbody className="docblock-argstable-body">
                            <tr>
                                <td className="css-4lbn0a">
                                    <span className="css-in3yi3">
                                        <p>P Paragraph text.</p>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default TypographyDecisions
