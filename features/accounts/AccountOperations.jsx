import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((state) => state.account.account);
  console.log(balance);

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit({ amount: depositAmount, currency }));
    setDepositAmount("");
    setCurrency("USD");
  };
  const handleWithdrawal = () => {
    if (!withdrawAmount) return;
    dispatch(withdraw({ amount: withdrawAmount }));
    setWithdrawAmount("");
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="USD">Euro</option>
            <option value="USD">British Pounds</option>
          </select>
          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw {withdrawAmount}</button>
        </div>

        <div>
          <label>Request Loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input
            type="number"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(+e.target.value)}
          />
          <button onClick={handleRequestLoan}>Request Loan</button>
        </div>

        {currentLoan > 0 && (
          <div>
            <label>
              <span>
                Pay Loan ₦{currentLoan} {currentLoanPurpose}
              </span>
            </label>
            <button onClick={handlePayLoan}>Pay Loan</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOperations;
