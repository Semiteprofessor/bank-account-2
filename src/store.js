import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    customer: customerReducer,
  },
});

export default store;
