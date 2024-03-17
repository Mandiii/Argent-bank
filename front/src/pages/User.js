import AccountBalance from "../components/AccountBalance";
import Login from "../pages/Login"
import { useSelector, useDispatch } from "react-redux";
import {  updateUsername } from "../state/user/userSlice";
import userProfileUpdate from "../services/userProfileUpdate"

function User() {

    const userInfo = useSelector((state) => state.userInfo.value)
    const token = userInfo.token
    const dispatch = useDispatch()
    console.log(userInfo)

    function toggleEditForm() {
        const form = document.getElementById("editForm")
        const editBtn = document.getElementById("editBtn")
        form.classList.toggle("hide")
        editBtn.classList.toggle("hide")

    }

    async function changeUsername() {
        const newUsername = document.getElementById("username").value
        console.log(newUsername)
        const usernameUpdate = await userProfileUpdate(userInfo.token, newUsername)
        if(usernameUpdate === "error") {
            alert("An error occurred")
        } else {
            dispatch(updateUsername(newUsername))
            toggleEditForm()
        }

    }
    if(!token) {
        return <Login/>}
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userInfo.username}</h1>
                <button id="editBtn" className="edit-form-button" onClick={() => toggleEditForm()}>Edit Name</button>

                <form id="editForm"className="editForm hide">
                    <h2>Edit user info</h2>
                    <div>
                        <label htmlFor="username">User name : </label>
                        <input type="text" id="username" defaultValue={userInfo.username} />
                    </div>                    
                    <div>
                        <label htmlFor="firstname">First name : </label>
                        <input type="text" id="firstname" disabled value={userInfo.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last name : </label>
                        <input type="text" id="lastname" value={userInfo.lastName} disabled />
                    </div>
                    <div className="formButtons">
                        <button onClick={(e) => {
                            e.preventDefault()
                            changeUsername()}} className="edit-form-button">Save</button>
                        <button onClick={(e) => {
                            e.preventDefault()
                             toggleEditForm()}} className="edit-form-button">Cancel</button>
                    </div>

                    
                </form>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountBalance
                accountTitle="Argent Bank Checking (x8349)"
                accountAmount="$2,082.79"
                amountDescription="Available Balance"
            />
            <AccountBalance
                accountTitle="Argent Bank Savings (x6712)"
                accountAmount="$10,928.42"
                amountDescription="Available Balance"
            />
            <AccountBalance
                accountTitle="Argent Bank Credit Card (x8349)"
                accountAmount="$184.30"
                amountDescription="Current Balance"
            />
        </main>

    )
}
export default User;