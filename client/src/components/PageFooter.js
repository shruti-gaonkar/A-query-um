import React from "react";
import { Footer } from "react-materialize";

function PageFooter() {
    return (
        <Footer
            className="blue-grey darken-4"
            copyrights="&copy; 2020 A-Query-Um"
            links={<ul><li><a className="grey-text text-lighten-3" href="#!">GitHub Repo</a></li></ul>}
        >
            <h5 className="white-text">
                A-query-um
            </h5>
            <p className="grey-text text-lighten-4">
                A searchable aquarium fish database.
            </p>
        </Footer>
    );
}

export default PageFooter;