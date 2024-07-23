import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  customerId: "",
  customerName: "",
  customerAddress: "",
  customerPhoneNumber: "",
  customerEmail: "",
  customerLoans: [],
  createdAt: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        customerId: action.payload.customerId,
        customerName: action.payload.customerName,
        customerAddress: action.payload.customerAddress,
        customerPhoneNumber: action.payload.customerPhoneNumber,
        customerEmail: action.payload.customerEmail,
        customerLoans: [
          ...state.customerLoans,
          {
            loanId: action.payload.loanId,
            amount: action.payload.amount,
            purpose: action.payload.purpose,
          },
        ],
        createdAt: action.payload.createdAt,
      };

    case "customer/update":
      return {
        ...state,
        customerName: action.payload.customerName,
        customerAddress: action.payload.customerAddress,
        customerPhoneNumber: action.payload.customerPhoneNumber,
        customerEmail: action.payload.customerEmail,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 700 });
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 700, purpose: "Buy a car" },
});

store.dispatch({ type: "account/payLoan" });

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};

const payLoan = () => {
  return { type: "account/payLoan" };
};

const createCustomer = (
  customerId,
  customerName,
  customerAddress,
  customerPhoneNumber,
  customerEmail,
  customerLoans,
  createdAt
) => {
  return {
    type: "customer/create",
    payload: {
      customerId,
      customerName,
      customerAddress,
      customerPhoneNumber,
      customerEmail,
      customerLoans,
      createdAt: new Date().toISOString(),
    },
  };
};

store.dispatch(deposit(5000));
store.dispatch(withdraw(800));
store.dispatch(requestLoan(50000, "Buy a car"));
store.dispatch(payLoan());
store.dispatch(
  createCustomer(
    new Date().toISOString(),
    "Taiwo Olapade",
    "Yaba, Lagos",
    "08069095729",
    "semiteprofessor@gmail.com",
    []
  )
);
console.log(store.getState());

export default store;
