import userLogin from "../services/userLogin";
import getUserInfo from "../services/getUserInfo";
import { useDispatch, useSelector } from 'react-redux'
import { updateToken, updateUsername, updateFirstName, updateLastName } from "../state/user/userSlice";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    // States for the username, password and rememberMe checkbox.
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
  
    const { token } = useSelector((state) => state.userInfo.value);
  
    useEffect(() => {
      if (token) {
        navigate("/user");
      }
    }, [token]);
  
    async function getUserToken() {
      try {
        const user = {};
        user.token = await userLogin(username, password);
        if (rememberMe) {
          localStorage.setItem("token", user.token);
        }
        user.info = await getUserInfo(user.token);

        dispatch(updateUsername(user.info.userName));
        dispatch(updateFirstName(user.info.firstName));
        dispatch(updateLastName(user.info.lastName));
        dispatch(updateToken(user.token));

      } catch (error) {
        alert(error.message);
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
              <input type="text" id="username" value={username}
                     onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password}
                     onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" checked={rememberMe}
                     onChange={() => setRememberMe(previous => !previous)} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
  
            <button className="sign-in-button" onClick={() => getUserToken()}>Sign In</button>
          </form>
        </section>
      </main>
    );
  }
  
  export default Login;