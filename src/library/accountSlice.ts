import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface AccountState {
  address: string | undefined;
}

const initialState: AccountState = {
  address: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | undefined>) => {
      state.address = action.payload;
    },
  },
});

export const getAccount = (state: RootState) => {
  return state.account.address;
};

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
