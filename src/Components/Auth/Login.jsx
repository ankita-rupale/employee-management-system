import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Email is: ", email, "and password is: ", password)

        setEmail("")
        setPassword("")
    }
    return (
        <div className="flex min-h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form className="flex flex-col items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400"
                        required
                        type="email"
                        placeholder="Enter your email" />
                    <input
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400 mt-4"
                        required
                        type="password"
                        placeholder="Enter password" />
                    <button className="mt-4 bg-emerald-600 text-white py-3 px-5 rounded-full hover:bg-emerald-700">Log in</button>
                </form>
            </div>
        </div>)
}

export default Login;