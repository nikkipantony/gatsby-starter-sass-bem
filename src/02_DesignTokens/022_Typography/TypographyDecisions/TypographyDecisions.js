import React from "react"
import { Canvas } from "@storybook/addon-docs"

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
            <p className="css-1p8ieni">
                This section visually presents the type formatting decisions
                made using the design tokens above for this design system.
            </p>

            {/* Headings */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Headings</h3>
                <p className="css-1p8ieni">
                    The `h1` to `h6` elements represent six levels of section
                    and/or page headings with `h1` being at the highest
                    hierarchical level and `h6` being at the lowest. You should
                    only use one `h1` per page. However, using more than one
                    will not result in an error, but using only one is seen as a
                    best practice. Having a single top-level title is also
                    arguably better for screenreader users, and for SEO.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h1>H1 Heading</h1>
                        <h2>H2 Heading</h2>
                        <h3>H3 Heading</h3>
                        <h4>H4 Heading</h4>
                        <h5>H5 Heading</h5>
                        <h6>H6 Heading</h6>
                    </div>
                </Canvas>
            </section>

            {/* Paragraphs */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Paragraphs</h3>
                <p className="css-1p8ieni">
                    The `p` element represents a paragraph. Paragraphs are
                    represented in visual media as blocks of text structured to
                    group related content and separate them from adjacent blocks
                    by blank lines and/or first-line indentation.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>Paragraph body text.</p>
                    </div>
                </Canvas>
            </section>

            {/* Links */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Links</h3>
                <p className="css-1p8ieni">
                    The `a` element with its `href` attribute, create hyperlinks
                    know as an Anchor link to web pages, files, email addresses,
                    locations etc in the same page, or anywhere else a URL can
                    address. Content within each `a` should indicate the link's
                    destination. Underline should only be used for text links
                    and should never be used as a mechanism for adding emphasis.
                    While using this design system you should use the `ExLink`
                    Atom component for external links, the `NavLink` component
                    for navigation and the `SkipLink` to skip to main content to
                    help improve accessibility.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>
                            This is an <a href="#">Anchor link</a> example.
                        </p>
                    </div>
                </Canvas>
            </section>

            {/* Lists */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Lists</h3>
                <p className="css-1p8ieni">
                    The `ul` element represents an unordered list of items,
                    rendered as a bulleted list while the `ol` element
                    represents an ordered list of items renders as a numbered
                    list. Lists should either be part of a section with other
                    text for context or have a section heading.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <ul>
                            <li>This is an unordered list example</li>
                            <li>List items that are not in an order</li>
                            <li>It is just a list of items</li>
                        </ul>

                        <ol>
                            <li>This is an example of an ordered list</li>
                            <li>Items have a hierarchy</li>
                            <li>Items are shown with a number</li>
                        </ol>
                    </div>
                </Canvas>
            </section>

            {/* Captions */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Captions</h3>
                <p className="css-1p8ieni">
                    The `figcaption` element represents a caption or legend
                    describing the rest of the content of its parent `figure`
                    element such as for an image. When using this design system
                    you should use the `Figure` Atom component for this purpose.
                </p>

                <Canvas style={{ margin: "0" }}>
                    <figure>
                        <div
                            style={{
                                display: "grid",
                                width: "500px",
                                height: "200px",
                                boxShadow: "rgb(0 0 0 / 10%) 0 4px 6px 0",
                                border: "2px solid rgba(0, 0, 13, .4)",
                                borderRadius: "4px",
                                backgroundColor: "#f3f3f3",
                            }}
                        >
                            <p style={{ margin: "auto" }}>Figure</p>
                        </div>
                        <figcaption>Example figure caption.</figcaption>
                    </figure>
                </Canvas>
            </section>

            {/* Microcopy */}

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Microcopy</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>
            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Emphasis</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>
            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Idiomatic Text</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>
            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Strong Importance</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Strikethrough</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Highlighting</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Quotations</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            <section
                style={{
                    marginBottom: "40px",
                }}
            >
                <h3>Citations</h3>
                <p className="css-1p8ieni">X</p>

                <Canvas style={{ margin: "0" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p>X</p>
                    </div>
                </Canvas>
            </section>

            {/* // Abbreviations next */}
        </div>
    )
}

export default TypographyDecisions
