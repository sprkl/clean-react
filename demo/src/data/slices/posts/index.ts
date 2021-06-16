// Actions
import { Post } from "../../../models/post";
import * as actions from "./actions";

// Models

class UsersState {
    posts: Array<Post> = [];
}

const usersReducer = (state = new UsersState(), action: any): UsersState => {
    switch (action.type) {
        case actions.SET_POSTS:
            return { ...state, posts: action.value };

        default:
            return state;
    }
};

export default usersReducer;
