import { combineReducers } from "redux";

// Slices
import authReducer from "../slices/auth";
import commonReducer from "../slices/common";
import postsReducer from "../slices/posts";

const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
