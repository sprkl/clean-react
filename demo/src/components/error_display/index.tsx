import React from "react";

// Externals
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";

// Redux
import { RootState } from "../../data/rootReducer";
import { setError } from "../../data/slices/common/actionCreators";
import { makeStyles } from "@material-ui/core";

const ErrorDisplay = () => {
    const error = useSelector<RootState, string | null>(
        (state) => state.common.error
    );

    const styles = useStyles();
    const dispatch = useDispatch();

    if (null) return null;

    return (
        <p className={styles.error}>
            {error}&nbsp;
            {error && (
                <ClearIcon
                    className={styles.clearButton}
                    onClick={() => dispatch(setError(""))}
                />
            )}
        </p>
    );
};

export default ErrorDisplay;

const useStyles = makeStyles((theme) => ({
    error: { color: theme.palette.error.main },
    clearButton: { cursor: "pointer" },
}));
