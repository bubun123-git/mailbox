import { useRef } from 'react'
import { Link } from "react-router-dom";

function ForgotPassword() {
    const emailRef = useRef();


    const forgotPasswordHandler = () => {
        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCEG5Gwod_DMWZIDeZRt0cV16yPtodXr2c",
            {
                method: "POST",
                body: JSON.stringify({
                    requestType: "PASSWORD_RESET",
                    email: emailRef.current.value,
                }),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("error occured while changing password");
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                // Handle specific error type
                console.log("A TypeError occurred:", err.message);
            });
    };
    return (
        <section className="bg-gradient-to-b from-green-400 to-red-800 via-yellow-300 w-full max-w-xl rounded-lg shadow-md py-6 text-center text-white mx-auto my-5">
            <h2 className="text-3xl font-bold text-white mb-4">Forgot Password</h2>
            <div className="w-full max-w-md mx-auto">
            <label htmlFor="email" className="block text-black font-semibold mb-2">Enter your email</label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-400 bg-deep-blue-800 text-white"
                />
            </div>
            <button
                onClick={forgotPasswordHandler}
                className="bg-gradient-to-r from-blue-800 to-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-400 mt-4 hover:bg-red-500"
            >
                Send Password Reset Link
            </button>
        </section>


    )
}

export default ForgotPassword