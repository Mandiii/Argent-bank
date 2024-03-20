import AccountBalance from "../components/AccountBalance";
import Login from "../pages/Login"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  updateUsername } from "../state/user/userSlice";
import userProfileUpdate from "../services/userProfileUpdate"

function User() {

    
    const userInfo = useSelector((state) => state.userInfo.value)
    const token = userInfo.token
    const username = userInfo.username
    
    const dispatch = useDispatch()
    const [newUsername, setNewUsername] = useState(username)

    const [showEditForm, setShowEditForm] = useState(false)

    async function changeUsername() {
        try {
          await userProfileUpdate(token, newUsername)
          
            dispatch(updateUsername(newUsername))
            setShowEditForm(!showEditForm)
          
        } catch (error) {
          alert(error.message);
        }
      }

    if(!token) {
        return <Login/>}
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userInfo.username}</h1>
                {!showEditForm && <button id="editBtn" className="edit-form-button" onClick={() => setShowEditForm(!showEditForm)}>Edit Name</button>}

                {showEditForm && <form id="editForm"className="editForm">
                    <h2>Edit user info</h2>
                    <div>
                        <label htmlFor="username">User name : </label>
                        <input type="text" id="username" value={newUsername} onChange={(event) => setNewUsername(event.target.value)} />
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
                            setShowEditForm(!setShowEditForm)}} className="edit-form-button">Cancel</button>
                    </div>

                    
                </form>}
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