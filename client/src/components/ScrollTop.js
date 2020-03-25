import React from "react";
import ReactDOM from "react-dom";
import ScrollTop from "@nzambello/react-scrolltop";

function Scroll() {
  return (
    <div className="scroll">
      <ScrollTop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Scroll />, rootElement);

export default Scroll;