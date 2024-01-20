import BtnPrimary from "./BtnPrimary";
function AccountBalance(props) {
    return (
        <section class="account">
            <div class="account-content-wrapper">
                <h3 class="account-title">{props.accountTitle}</h3>
                <p class="account-amount">{props.accountAmount}</p>
                <p class="account-amount-description">{props.amountDescription}</p>
            </div>
            <div class="account-content-wrapper cta">
                <BtnPrimary
                    btnText="View transactions"
                    btnClass="transaction-button"
                />
            </div>
        </section>
    )
}
export default AccountBalance;