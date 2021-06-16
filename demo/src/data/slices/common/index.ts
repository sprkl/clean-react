// Actions
import * as actions from "./actions";

// Externals

class CommonState {
    error: string | null = null;
}

const commonReducer = (state = new CommonState(), action: any): CommonState => {
    switch (action.type) {
        case actions.SET_ERROR:
            return { ...state, error: action.value };

        default:
            return state;
    }
};

export default commonReducer;
