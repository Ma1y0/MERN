import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"

function Login() {
    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = FormData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit= (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <FaSignInAlt />
                <p>Please login</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input value={email} onChange={onChange} placeholder="Enter your e-mail" name="email" type="email" id="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={onChange} placeholder="Enter your password" name="password" type="password" id="password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
