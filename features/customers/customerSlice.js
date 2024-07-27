import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  customerAddress: "",
  customerPhoneNumber: "",
  customerEmail: "",
  customerLoans: [],
  customerID: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.customerAddress = action.payload.customerAddress;
      state.customerPhoneNumber = action.payload.customerPhoneNumber;
      state.customerEmail = action.payload.customerEmail;
      state.customerID = action.payload.customerID;
      state.customerLoans = action.payload.customerLoans;
    },
    addLoan: (state, action) => {
      state.customerLoans.push(action.payload);
    },
    removeLoan: (state, action) => {
      const index = state.customerLoans.findIndex(
        (loan) => loan.loanID === action.payload
      );
      if (index !== -1) {
        state.customerLoans.splice(index, 1);
      }
    },
    updateCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.customerAddress = action.payload.customerAddress;
      state.customerPhoneNumber = action.payload.customerPhoneNumber;
      state.customerEmail = action.payload.customerEmail;
      state.customerID = action.payload.customerID;
      state.customerLoans = action.payload.customerLoans;
    },
  },
});

export const { createCustomer, addLoan, removeLoan, updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
