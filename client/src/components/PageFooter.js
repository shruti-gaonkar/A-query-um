import React from "react";
import { Footer } from "react-materialize";

function PageFooter() {
    return (
        <Footer
            className="light-blue accent-4"
            copyrights="&copy; 2020 A-Query-Um"
            links={<ul><li><a className="grey-text text-lighten-3" href="#!">GitHub Repo</a></li></ul>}
        >
            <h5 className="white-text">
                Footer Content
            </h5>
            <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer content.
            </p>
        </Footer>
    );
}

export default PageFooter;