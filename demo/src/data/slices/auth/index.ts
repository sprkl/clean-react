// Actions
import * as actions from "./actions";

// Externals

class AuthState {
    userId: number | null = null;
}

const authReducer = (state = new AuthState(), action: any): AuthState => {
    switch (action.type) {
        case actions.AUTHENTICATE:
            return { ...state, userId: action.value };

        case actions.LOGOUT:
            return { ...state, userId: null };

        default:
            return state;
    }
};

export default authReducer;
