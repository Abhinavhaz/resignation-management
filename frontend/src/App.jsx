// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import EmployeeDashboard from './pages/EmployeeDashboard';
// import HRDashboard from './pages/HRDashboard';
// import ResignationForm from './pages/ResignationForm';
// import ExitInterview from './pages/ExitInterview';
// import PrivateRoute from './components/PrivateRoute';

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Switch>
//        <h1>Hello, React!</h1>

//                 <Route path="/login" component={Login} />
//                 <PrivateRoute path="/employee-dashboard" component={EmployeeDashboard} role="employee" />
//                 <PrivateRoute path="/hr-dashboard" component={HRDashboard} role="hr" />
//                 <PrivateRoute path="/resignation-form" component={ResignationForm} role="employee" />
//                 <PrivateRoute path="/exit-interview" component={ExitInterview} role="employee" />
//             </Switch>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import HRDashboard from './pages/HRDashboard';
import ResignationForm from './pages/ResignationForm';
import ExitInterview from './pages/ExitInterview';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Public Route */}
                <Route path="/login" element={<Login />} />
                
                {/* Protected Routes */}
                <Route element={<PrivateRoute role="employee" />}>
                    <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
                    <Route path="/resignation-form" element={<ResignationForm />} />
                    <Route path="/exit-interview" element={<ExitInterview />} />
                </Route>

                <Route element={<PrivateRoute role="hr" />}>
                    <Route path="/hr-dashboard" element={<HRDashboard />} />
                </Route>

                {/* Default route */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
