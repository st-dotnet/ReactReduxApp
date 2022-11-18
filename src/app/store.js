import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import employeeReducer from "../features/employee/employeeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeApi } from "../services/employee";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    employee: employeeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(employeeApi.middleware),
});
setupListeners(store.dispatch);
