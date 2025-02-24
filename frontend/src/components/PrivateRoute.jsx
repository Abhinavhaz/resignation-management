// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom'; // ✅ Use Navigate instead of Redirect


// const PrivateRoute = ({ component: Component, role, ...rest }) => {
//     const { user } = useSelector(state => state.auth);

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 user ? (user.role === role ? <Component {...props} /> : <Redirect to="/" />) : <Redirect to="/login" />
//             }
//         />
//     );
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ role }) => {
    const { user } = useSelector(state => state.auth);

    if (!user) return <Navigate to="/login" replace />;
    if (user.role !== role) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default PrivateRoute;

