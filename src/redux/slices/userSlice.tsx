import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload}
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {}
      state.isLoggedIn = false
    }
  }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer