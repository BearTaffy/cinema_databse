import {useState} from "react";
import {useNavigate} from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === '123@hotmail.com' && password === '123') {
            setIsLoggedIn(true);
        } else {
            alert('Wrong email or password!');
        }
    }

    if (isLoggedIn) {
        navigate('/home');
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
            <div className="mx-auto w-full max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 mx-auto w-full max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                            <div className="text-sm mt-4">
                                <a href="/reset" className="font-semibold text-blue-500 hover:text-blue-700">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700">
                            Sign in
                        </button>
                        <a href="/register"
                           className="font-semibold items-center justify-center flex mt-6 text-blue-500 hover:text-blue-700">
                            Don't have an account? Sign up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;