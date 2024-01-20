import BtnPrimary from "../components/BtnPrimary";
import AccountBalance from "../components/AccountBalance";
function User() {
    return (
        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <BtnPrimary
                    btnText="Edit Name"
                    btnClass="edit-button"
                />
            </div>
            <h2 class="sr-only">Accounts</h2>
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