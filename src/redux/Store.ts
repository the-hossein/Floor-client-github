import { configureStore } from "@reduxjs/toolkit";
import LangSlice from "./slices/LangSlice";
// ...
import { logger } from "redux-logger";
const store = configureStore({
  reducer: {
    lang: LangSlice,
  },
  middleware: [logger],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
