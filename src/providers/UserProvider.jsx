import React, { useEffect, useState } from 'react'
import { UserContext } from '../components/contexts'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';

function UserProvider({ children }) {
    const navigate = useNavigate(); // Add navigate hook
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);


    useEffect(() => {
        const token = localStorage.getItem('userToken'); // Get token inside useEffect

        if (token) {
            axios.get('https://myeasykart.codeyogi.io/me', {
                headers: {
                    Authorization: token,
                },
            })
                .then(resp => {
                    setUser(resp.data);
                    setLoadingUser(false);
                })
                .catch(() => {
                    localStorage.removeItem('userToken'); // If token is invalid, remove it
                    setUser(null);
                    setLoadingUser(false);
                    navigate('/login'); // Redirect to login if token is invalid
                });
        } else {
            setUser(null);
            setLoadingUser(false);
        }
    }, []); // Empty dependency to run once on mount

    function handleLogout() {
        localStorage.removeItem('userToken');
        setUser(null);
        navigate('/login'); // Redirect immediately
    }

    if (loadingUser) {
        return <Loading />;
    }

    return (
        <UserContext.Provider value={{ user, setUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
