import userLogin from "../services/userLogin";
import getUserInfo from "../services/getUserInfo";
import { useDispatch } from 'react-redux'
import { updateToken, updateUsername, updateFirstName, updateLastName } from "../state/user/userSlice";
import { useNavigate } from "react-router";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function getUserToken() {
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        const userToken = await userLogin(username, password)
        console.log(userToken)

        if (userToken === "error") {
            alert("Incorrect username or password")
        } else {
            dispatch(updateToken(userToken))
            const userInfo = await getUserInfo(userToken)
            dispatch(updateUsername(userInfo.body.userName))
            dispatch(updateFirstName(userInfo.body.firstName))
            dispatch(updateLastName(userInfo.body.lastName))
            console.log(userInfo)
            navigate("/user")
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    
                    <button className="sign-in-button" onClick={() => getUserToken()}>Sign In</button>
                </form>
            </section>
        </main>
    )
}
export default Login;