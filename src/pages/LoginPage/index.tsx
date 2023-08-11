import "./LoginPage.css";
import {FormEvent, useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

interface FormData {
    username: string;
}

export default function LoginPage() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const formData = useRef({} as Partial<FormData>);

    function handleOnChange(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const input = e.currentTarget;

        // make sure to set all inputEl.name to the correct values in FormData!
        formData.current[input.name as keyof FormData] = input.value;
    }

    function submitHandler(e: FormEvent) {
        e.preventDefault();
        const data = formData.current;

        if (data.username) {
            user?.login(data.username);
            navigate("/");
        }

    }

    return (
        <div>
            <h1>Log-in Page</h1>

            <form onSubmit={submitHandler}>
                <input type="text" name="username" required onChange={handleOnChange}/>
            </form>
        </div>
    );
}