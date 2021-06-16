// Actions
import * as actions from "../actions";

export const authenticate = () => {
    // DoSomething to authenticate the user
    return { type: actions.AUTHENTICATE, value: 3 };
};

export const logout = () => {
    return { type: actions.LOGOUT };
};
