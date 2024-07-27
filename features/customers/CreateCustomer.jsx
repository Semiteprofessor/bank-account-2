import React from "react";
import { useState } from "react";

const CreateCUstomer = () => {
  const [customerID, setCustomerID] = useState(new Date().toISOString());
  const [fullName, setFullName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setcustomerPhoneNumber] = useState("");
  const [customerLoan, setcustomerLoan] = useState("");
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Address</label>
          <input
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Email</label>
          <input
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Phone Number</label>
          <input
            value={customerPhoneNumber}
            onChange={(e) => setcustomerPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Loan</label>
          <input
            value={customerLoan}
            onChange={(e) => setcustomerLoan(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={customerID}
            onChange={(e) => setCustomerID(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default CreateCUstomer;
