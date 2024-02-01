import { useEffect } from "react";

function Login() {
    function UserLogin()  {
        useEffect(() => {
            fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                  "accept": "application/json",
                  "content-Type": "application/json"
                  
                },
                body: JSON.stringify({
                  "email": "tony@stark.com",
                  "password": "password123"
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log('effect ran')
                console.log(data)
            })
        }, [])
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <a href="#" className="sign-in-button" onClick={UserLogin()}>Sign In</a>
                    {/* <!-- SHOULD BE THE BUTTON BELOW -->
                    <!-- <button className="sign-in-button">Sign In</button> -->
                    <!--  --> */}
                </form>
            </section>
        </main>
    )
}
export default Login;