import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  userType: string; // Assuming userType is a string, you can change it to the appropriate type
}

const initialState: AuthState = {
  isAuthenticated: false,
  userType: "", // Set an initial value for userType
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState) => {
      state.isAuthenticated = true;
    },
    logout: (state: AuthState) => {
      state.isAuthenticated = false;
    },
    setUserType: (state: AuthState, action: { payload: string }) => {
      state.userType = action.payload;
    },
  },
});

export const { login, logout, setUserType } = authSlice.actions;
export const rootReducer = authSlice.reducer;
