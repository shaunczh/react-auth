import { Redirect } from "react-router-dom"
import { useState } from "react"

const Login = ({setState, state}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        
        const res = await fetch('http://localhost:8000/api/login' , {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            credentials: 'include',         //to get JWT
            body: JSON.stringify({email,password})
        })
        const data = await res.json()
        setRedirect(true)
        setState(!state)
        console.log(data);
    }

    if (redirect) {
        return <Redirect to="/" />
    } else {
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>
        )
    }
}

export default Login
