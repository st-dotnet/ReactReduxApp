import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empData: "",
};
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.empData = action.payload;
    },    
    updateEmployee: () => {},
    getEmployee: () => {},
    deleteEmployee: () => {},
  },
});
export const { addEmployee, updateEmployee, getEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
