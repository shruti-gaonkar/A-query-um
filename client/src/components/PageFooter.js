import React from "react";
import { Footer, Icon } from "react-materialize";

function PageFooter() {
    return (
        <Footer
            className="grey darken-4"
            copyrights="&copy; 2020 A-Query-Um"
            links={
                <ul className="valign-wrapper">
                    <li>
                        <a className="grey-text text-lighten-3" href="https://github.com/shruti-gaonkar/A-query-um/">GitHub Repo</a>
                        <br />
                        <br />
                        <a className="grey-text text-lighten-3" href="#"><Icon tiny>arrow_upward</Icon>&nbsp;Return To Top</a>
                    </li>
                </ul>}
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