import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: { value: {
    token: "",
    username: "",
    firstName: "",
    lastName: ""
    }      
  },
  reducers: {
    updateToken(state, action) {
      state.token = action.payload
    },
    updateUsername(state, action) {
      state.username = action.payload
    }
    // getUserInfos
  }
})

export const {updateToken, updateUsername} = userSlice.actions
export default userSlice.reducer
