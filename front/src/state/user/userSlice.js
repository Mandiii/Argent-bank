import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
    name: "userToken",
    initialState: {
        value: "",
      },
    reducers: {}
})

export default userTokenSlice.reducer
