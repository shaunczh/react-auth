import { useState } from "react"
import { Redirect } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:8000/api/register' , {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({name,email,password})
        })
        const data = await res.json()
        console.log(data);
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/login" />
    } else {
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassworda">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>
        )
    }
}

export default Register
