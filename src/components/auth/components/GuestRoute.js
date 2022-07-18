import {useContext} from "react";
import { Navigate } from "react-router-dom";

import authContext from "../../../authContext";

function GuestRoute({children}) {
    const { authenticated } = useContext(authContext);

    if (authenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default GuestRoute;