import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { user } = useSelector(state => state.auth);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {user ? (
                    <>
                        {user.role === 'employee' ? (
                            <li>
                                <Link to="/employee-dashboard">Employee Dashboard</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/hr-dashboard">HR Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
