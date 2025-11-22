
export default function Register({
    user,
    register
}) {

    const submitHandler = (formData) => {
        const { email, password, repassword } = Object.fromEntries(formData);
        if (!email) {
            return alert('Email is required!')
        }
        if (!password) {
            return alert('Password is required!')
        }
        if (email.length < 3) {
            return alert('Email must be at least 3 characters long!')
        }
        if (password.length < 3) {
            return alert('Password must be at least 3 characters long!')
        }

        if (repassword !== password) {
            return alert('Passwords does not match!')
        }

        return register(email)

    }


    return (
        <section id="register-page" className="content auth">
            <form id="register" action={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" placeholder="Password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="repassword" id="confirm-password" placeholder="Repeat Password" />

                    <input className="btn submit" type="submit" value="Register" />


                </div>
            </form>
        </section>
    )
}