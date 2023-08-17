import React, {createContext, useState} from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {
    ActorListPage, ActorDetailPage,
    ErrorPage, LoginPage,
    MovieDetailPage, MoviesListPage,
} from "../pages";

import NavBar from "../components/NavBar";

interface User {
    username: string;
}

export interface UserContext {
    login: (username: string, password: string) => void;
    logout: () => void;
    user: User | null;
}

// @ts-ignore
export const UserContext = createContext(null as UserContext);

function App() {
    const [user, setUser] = useState(null as null|User);

    // naive login for testing
    function login(username: string, password: string) {
        setUser({username});
    }

    function logout() {
        setUser(null);
    }

    // get page
    const page = !user ? <LoginPage /> :
        <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route path="/actors/:actor" element={<ActorDetailPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage/>} />
            <Route path="*" element={<ErrorPage code={404} message="Page not found." />} />
        </Routes>;


    return (
        <div className="App">
            <UserContext.Provider value={{login, logout, user}}>
                <NavBar />
                {page}
            </UserContext.Provider>
        </div>
    );
}

export default App;
