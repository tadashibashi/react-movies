import React, {FormEvent, useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

import "./LoginForm.scss"

interface FormData {
    username: string;
    password: string;
}


export default function LoginForm() {
    const [error, setError] = useState("");
    const userCtx = useContext(UserContext);
    const formData = useRef<FormData>({username: "", password: ""});
    const navigate = useNavigate();

    function handleOnChange(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const input = e.currentTarget;

        // make sure to set all inputEl.name to the correct values in FormData!
        formData.current[input.name as keyof FormData] = input.value;
    }

    function submitHandler(e: FormEvent) {
        e.preventDefault();

        try {
            const data = formData.current;

            if (data.username) {
                userCtx.login(data.username, data.password || "");
                navigate("/");
            }

        } catch(err) {
            if (err instanceof Error)
                setError(err.message);
        }
    }

    return (
        <div className="LoginForm">
            <form onSubmit={submitHandler}>
                {error && <p style={{color: "red"}}>{error}</p>}
                <label>
                    Username
                </label>
                <input type="text" name="username" required onChange={handleOnChange}/>
                <label>
                    Password
                </label>
                <input type="password" name="password" required onChange={handleOnChange}/>



                <input type="submit" value="Log In" />
            </form>
        </div>
    );
}