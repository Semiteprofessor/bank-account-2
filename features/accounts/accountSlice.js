import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    requestLoan: (state, action) => {
      if (state.loan > 0) return state;
      state.isLoading = true;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
      state.isLoading = false;
    },
    payLoan: (state) => {
      state.isLoading = false;
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});
