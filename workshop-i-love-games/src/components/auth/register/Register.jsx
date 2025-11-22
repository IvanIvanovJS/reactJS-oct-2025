export default function Register() {

    const submitHandler = (formData) => {
        const { email, password, repassword } = Object.fromEntries(formData);
        console.log(email, password, repassword);

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