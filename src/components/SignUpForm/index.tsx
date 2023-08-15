import React, {FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

interface FormData {
    username: string;
    password: string;
    confirm: string;
}

interface Props {
    user: UserContext;
    navigate: (url: string) => void;
}

interface State {
    passwordMismatch: boolean;
    error: string;
}

export default class SignUpForm extends React.Component<Props, State> {

    formData: Partial<FormData>;

    constructor(props: Props) {
        super(props);

        this.formData = {};
        this.state = {
            passwordMismatch: false,
            error: "",
        };
    }

    handleOnChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        const input = e.currentTarget;

        // make sure to set all inputEl.name to the correct values in FormData!
        this.formData[input.name as keyof FormData] = input.value;
    }

    submitHandler = (e: FormEvent) => {
        e.preventDefault();

        try {
            const data = this.formData;

            if (data.username) {
                if (data.password !== data.confirm) {
                    this.setState({passwordMismatch: true});
                    return;
                }
                this.props.user.login(data.username, data.password || "");
                this.props.navigate("/");
            }

            this.setState({passwordMismatch: false});
        } catch {
            this.setState({error: "Sign up failed - Try Again"});
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    Username
                    <input type="text" name="username" required onChange={this.handleOnChange}/>
                </label>

                <label>
                    Password
                    <input type="password" name="password" required onChange={this.handleOnChange}/>
                </label>

                <label>
                    Confirm Password
                    <input type="password" name="confirm" required onChange={this.handleOnChange}/>
                </label>

                {this.state.passwordMismatch && <p style={{color:"red"}}>Passwords must match</p>}


                <input type="submit" value="sign in" />
            </form>
        );
    }
}