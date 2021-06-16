// Actions
import { Post } from "../../../models/post";
import * as actions from "./actions";

// Models

class PostsState {
    posts: Array<Post> = [];
}

const postsReducer = (state = new PostsState(), action: any): PostsState => {
    switch (action.type) {
        case actions.SET_POSTS:
            return { ...state, posts: action.value };

        default:
            return state;
    }
};

export default postsReducer;
