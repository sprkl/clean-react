// Actions
import * as actions from "../actions";

// Types
import { AppDispatch, GetState } from "../../..";

// Models
import { Post } from "../../../../models/post";

// APIs
import { fetchPosts } from "../../../../services/posts";
import { setError } from "../../common/actionCreators";

export const initializePosts =
    () => async (dispatch: AppDispatch, getState: GetState) => {
        const posts = await fetchPosts();

        console.log("posts", posts);
        dispatch({ type: actions.SET_POSTS, value: posts });
    };

export const deletePost =
    (post: Post) => async (dispatch: AppDispatch, getState: GetState) => {
        const state = getState();
        const posts = state.posts.posts;
        const userId = state.auth.userId;

        if (post.userId !== userId) {
            dispatch(
                setError(
                    "Vous n'avez pas la permission de supprimer cette publication"
                )
            );
        } else {
            const filteredPosts = posts.filter((p) => p.id !== post.id);

            dispatch({ type: actions.SET_POSTS, value: filteredPosts });
        }
    };
