import * as React from "react";
import * as ReactDom from "react-dom";

import {SomeComponent} from "./components/SomeComponent";

require('./css/styles.scss');

ReactDom.render(
    <SomeComponent />, document.getElementById("entrypoint")
)


