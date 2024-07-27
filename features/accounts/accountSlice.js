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
      state.isLoading = false;
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
    convertCurrency: (state) => {
      state.isLoading = true;
    },
  },
});

// export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// export const deposit = async (amount, currency) => {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async (dispatch, getState) => {
//     dispatch({ type: "account/convertingCurrency" });

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// };

export default accountSlice.reducer;
export const { deposit, withdraw, requestLoan, payLoan, convertCurrency } =
  accountSlice.actions;
