import React, { useState } from "react";

// Externals
import { makeStyles } from "@material-ui/core";
import { useDispatch, Provider } from "react-redux";

// Internal Components
import PostItem from "./post_item";

// Helpers
import useFilteredData from "../../hooks/use_filtered_data";
import { initializePosts } from "../../data/slices/posts/actionCreators";

import store from "../../data/index";
import ErrorDisplay from "../../components/error_display";

const Demo06 = () => {
    const styles = useStyles();

    const [data, _, filter, setFilter] = useFilteredData();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(initializePosts());
    }, []);

    return (
        <Provider store={store}>
            <div className={styles.root}>
                <h1> Publications </h1>
                <label htmlFor="input-filter">Filtrer :</label>
                <input
                    name="input-filter"
                    type="text"
                    value={filter}
                    className={styles.input}
                    onChange={(e) => setFilter(e.target.value)}></input>

                <ErrorDisplay />
                <section>
                    {data.map((post) => (
                        <PostItem
                            key={post.id}
                            post={post}
                            filter={filter}
                        />
                    ))}
                </section>
            </div>
        </Provider>
    );
};

const App = () => (
    <Provider store={store}>
        <Demo06 />
    </Provider>
);

export default App;

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 24,
    },
    input: {
        marginLeft: 8,
    },
    article: {
        width: "50%",
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
    },
    body: {
        flex: 1,
    },
    deleteButton: {
        flex: 0,
        flexBasis: 40,
    },
    title: {
        fontSize: 24,
    },
    content: {},
    error: { color: theme.palette.error.main },
    highlighted: {
        backgroundColor: "yellow",
    },
}));
