import Board from "./Board/Board";
import React from 'react';

import './Content.css'

function Content(){

    return(
        <main>
            <div className="content-wrapper">
                <Board title = "General"/>
            </div>
        </main>
    );
}

export default Content;
