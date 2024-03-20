import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  token: localStorage.getItem("token") || "",
  username: "",
  firstName: "",
  lastName: ""}
const userSlice = createSlice({
  name: "userInfo",
  initialState: { value: initialValue},
  reducers: {
    updateToken(state, action) {
      state.value.token = action.payload
    },
    updateUsername(state, action) {
      state.value.username = action.payload
    },
    updateFirstName(state, action) {
      state.value.firstName = action.payload
    },
    updateLastName(state, action) {
      state.value.lastName = action.payload
    },
    logout(state) {
      localStorage.removeItem("token");
      state.value = { ...initialValue, token: "" };
    }
  }
})

export const {updateToken, updateUsername, updateFirstName, updateLastName, logout} = userSlice.actions
export default userSlice.reducer
