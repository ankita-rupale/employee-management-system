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
      <div className="flex h-screen w-screen item-center justify-center">
        <div className="border-2 border-emerald-600">
          <form className="flex flex-col items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
              <input
                  value={email}
                  onChange={(e) => {
                      setEmail(e.target.value)
                  }}
                  className="border-2 border-emerald-600 rounded-full"
                  required
                  type="email"
                  placeholder="Emter your email" />
              <input
                  value={password}
                  onChange={(e) =>
                      setPassword(e.target.value)
                  }
                  className="border-2 border-emerald-600 rounded-full"
                  required
                  type="password"
                  placeholder="Enter password" />
              <button>Log in</button>
          </form>
        </div>
      </div>)
}

export default Login;