import React from "react";

import "./App.css";

import { Deck, Slide, Heading } from "spectacle";
import Template from "./layout/template";

import Slides from "./slides";

function App() {
    return (
        <Deck template={Template}>
            {Object.keys(Slides).map((slide, index) => {
                return (
                    <React.Fragment key={index}>
                        {(Slides as any)[slide]()}
                    </React.Fragment>
                );
            })}
        </Deck>
    );
}

export default App;
