import UserLogin from "../services/services";
import { useSelector, useDispatch } from 'react-redux'
import { updateToken } from "../state/user/userSlice";
import { useNavigate } from "react-router";

function Login() {
    const dispatch = useDispatch()
    async function getUserInfo() {
        // e.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        const userToken = await UserLogin(username, password)
        console.log(userToken)

        // verify if/else error usertoken success
        dispatch(updateToken(userToken))
        // localstrogage
        // call api profile -> stock in store -> dispatch
        // diriger vers page user router navigate
        // const navigate = useNavigate
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(event) => event.preventDefault() }>
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
                    
                    <button className="sign-in-button" onClick={() => getUserInfo()}>Sign In</button>
                </form>
            </section>
        </main>
    )
}
export default Login;