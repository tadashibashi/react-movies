import "./ErrorPage.css";

interface Props {
    code: number;
    message?: string;
}

export default function ErrorPage({code, message}: Props) {

    return (
        <div>
            <h1>Sorry, we encountered an error.</h1>
            <p>Code: {code}</p>
            <p>{message}</p>
        </div>
    );
}