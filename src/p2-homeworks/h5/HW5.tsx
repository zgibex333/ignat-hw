import React from 'react'
import Header from './Header'
import Content from './Content'
import {BrowserRouter, HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Content/>

            </HashRouter>
        </div>
    )
}

export default HW5
