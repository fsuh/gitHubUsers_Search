import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/User";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
	user: null | IUser;
}

const initialState: IAuthState = {
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
