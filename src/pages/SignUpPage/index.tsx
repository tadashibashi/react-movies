import "./LoginPage.css";
import {FormEvent, useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App";
import {SignUpForm} from "../../components";



export default function SignUpPage() {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Log In</h1>
            <SignUpForm user={user} navigate={navigate} />
        </div>
    );
}
