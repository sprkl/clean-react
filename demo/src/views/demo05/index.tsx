import React, { useState } from "react";

// Externals
import { makeStyles } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

// Internal Components
import PostItem from "./post_item";

// Models
import { Post } from "../../models/post";

// APIs

// Helpers
import * as delay from "../../helpers/delay";
import { fetchPosts } from "../../services/posts";

const slowSortFunction = (data: Array<Post>) => {
    delay.block();
    return data.sort((a, b) => a.title.localeCompare(b.title));
};

const canDeletePost = (userId: number, post: Post) => {
    return post.userId === userId;
};

const Demo05 = () => {
    const styles = useStyles();

    const [userId] = useState(3);
    const [error, setError] = useState("");
    const [filter, setFilter] = useState("");

    // on stocke les données dans le state du composant, pour pouvoir les manipuler
    const [data, setData] = useState<Array<Post>>([]);

    React.useEffect(() => {
        (async () => {
            const posts = await fetchPosts();
            setData(posts);
        })();
    });

    // on dit que le memo a une dépendance sur data, pour que le tri se refasse quand on modifie data
    const sortedItems = React.useMemo(() => {
        return slowSortFunction(data);
    }, [data]);

    const filteredItems = sortedItems.filter(
        (s) => s.title.indexOf(filter) >= 0 || s.body.indexOf(filter) >= 0
    );

    const onDeletePost = (post: Post) => {
        if (canDeletePost(userId, post)) {
            setData(data.filter((d) => d.id !== post.id));
            setError("");
        } else {
            setError("Pas les droits pour supprimer ce post");
        }
    };

    return (
        <div className={styles.root}>
            <h1> Publications </h1>
            <label htmlFor="input-filter">Filtrer :</label>
            <input
                name="input-filter"
                type="text"
                value={filter}
                className={styles.input}
                onChange={(e) => setFilter(e.target.value)}></input>
            <p className={styles.error}>
                {error}&nbsp;
                {error && (
                    <ClearIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setError("")}
                    />
                )}
            </p>
            <section>
                {filteredItems.map((post, index) => (
                    <PostItem
                        key={post.id}
                        onDeletePost={onDeletePost}
                        userId={userId}
                        post={post}
                        filter={filter}
                    />
                ))}
            </section>
        </div>
    );
};

export default Demo05;

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
