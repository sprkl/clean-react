import React from "react";

// Externals
import { Fab, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";

// Internal Components

// Models
import { Post } from "../../../../models/post";
import HighlightedText from "./highlighted-text";

// Services / APIs

// Actions
import { deletePost } from "../../../../data/slices/posts/actionCreators";
interface PostItemProps {
    post: Post;
    userId: number;
    filter: string;
}

const PostItem = ({ post, userId, filter }: PostItemProps) => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deletePost(post));
    };

    React.useEffect(() => {
        console.log("Initialisation du PostItem");
    }, []);

    React.useEffect(() => {
        console.log("Re-render du PostItem");
    }, [post, userId, filter]);

    return (
        <article
            className={styles.article}
            style={{
                backgroundColor:
                    post.userId === userId ? "lightcyan" : undefined,
            }}>
            <div className={styles.body}>
                <h2 className={styles.title}>
                    <span>{post.id} : </span>
                    <HighlightedText text={post.title} filter={filter} />
                </h2>
                <p className={styles.content}>
                    <HighlightedText text={post.body} filter={filter} />
                </p>
            </div>
            <Fab
                size="small"
                className={styles.deleteButton}
                onClick={onDelete}>
                <DeleteIcon />
            </Fab>
        </article>
    );
};

export default React.memo(PostItem);

const useStyles = makeStyles((theme) => ({
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
}));
