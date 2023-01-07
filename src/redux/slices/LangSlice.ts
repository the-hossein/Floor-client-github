import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILangReducer } from "../../models/reduxInterfaces/ReduxInterfaces";
import { Cookies } from "react-cookie";
import i18next from "i18next";

const initialState = {
  lang: "en",
} as ILangReducer;
const LangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang(State, action: PayloadAction<string>) {
      i18next.changeLanguage(action.payload);
      State.lang = action.payload;
    },
  },
});

export const { changeLang } = LangSlice.actions;
export default LangSlice.reducer;
