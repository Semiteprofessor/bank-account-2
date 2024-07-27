import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AccountOperations from "../features/accounts/AccountOperations";
import Customer from "../features/customers/Customer";

function App() {
  return (
    <div>
      <>
      <Customer />
      <AccountOperations />
      </>
    </div>
  );
}

export default App;
