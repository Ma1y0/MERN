import { useState } from "react"
import { FaUser } from "react-icons/fa"

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser />
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input value={name} onChange={onChange} placeholder="Enter your name" type="text" id="name" name="name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input value={email} onChange={onChange} placeholder="Enter your email" type="email" id="email" name="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={onChange} placeholder="Enter your password" type="password" id="password" name="password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input value={password2} onChange={onChange} placeholder="Confirm your password" type="password" id="password2" name="password2" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
