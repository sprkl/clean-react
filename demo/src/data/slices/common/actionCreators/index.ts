// Actions
import * as actions from "../actions";

export const setError = (message: string) => {
    // DoSomething to authenticate the user
    return { type: actions.SET_ERROR, value: message };
};
