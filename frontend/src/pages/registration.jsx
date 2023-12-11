function register() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
            <div className="mx-auto w-full max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create your account
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
                                type="password"
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type=""
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type=""
                                required
                                className="block w-full rounded-md py-1.5 text-gray-900  ring-1 ring-gray-300 p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default register;