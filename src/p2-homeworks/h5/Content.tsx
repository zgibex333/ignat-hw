import React, {useEffect} from 'react'
import {Routes, Route, useNavigate, useLocation, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Content() {
    const navigate = useNavigate();
    const location = useLocation();
    // useEffect(()=> {
    //     if(location.pathname === '' || location.pathname === '/') {
    //         navigate(PATH.PRE_JUNIOR)
    //     }
    // }, [location])

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>} />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </div>
    )
}

export default Content
