import React from "react";

import { Fab, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import { Post } from "../../../models/post";

import dataSource from "../data.json";
import * as delay from "../../../helpers/delay";

const slowSortFunction = (data: Array<Post>) => {
    delay.block();
    return data.sort((a, b) => a.title.localeCompare(b.title));
};

const canDeletePost = (userId: number, post: Post) => {
    return post.userId === userId;
};

const Demo03Final = () => {
    const styles = useStyles();

    const [filter, setFilter] = useState("");

    // on stocke les données dans le state du composant, pour pouvoir les manipuler
    const [data, setData] = useState(dataSource);

    // On ajoute un userid et un message d'erreur pour le fun
    const [userId] = useState(3);
    const [error, setError] = useState("");

    const date = new Date().getTime();

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

    const date2 = new Date().getTime();

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
            <p>
                <strong>Temps de process : {date2 - date}ms</strong>
            </p>
            <p className={styles.error}>{error}</p>
            <section>
                {filteredItems.map((post, index) => (
                    <article
                        key={post.id + "-" + index}
                        className={styles.article}
                        style={{
                            backgroundColor:
                                post.userId === userId
                                    ? "lightcyan"
                                    : undefined,
                        }}>
                        <div className={styles.body}>
                            <h2 className={styles.title}>
                                <span>{post.id} : </span>
                                {filter
                                    ? post.title
                                          .split(
                                              new RegExp(`(${filter})`, "gi")
                                          )
                                          .map((text, index) => {
                                              return (
                                                  <span
                                                      key={index}
                                                      className={
                                                          text === filter
                                                              ? styles.highlighted
                                                              : undefined
                                                      }>
                                                      {text}
                                                  </span>
                                              );
                                          })
                                    : post.title}
                            </h2>
                            <p className={styles.content}>
                                {filter
                                    ? post.body
                                          .split(
                                              new RegExp(`(${filter})`, "gi")
                                          )
                                          .map((text, index) => {
                                              return (
                                                  <span
                                                      key={index}
                                                      className={
                                                          text === filter
                                                              ? styles.highlighted
                                                              : undefined
                                                      }>
                                                      {text}
                                                  </span>
                                              );
                                          })
                                    : post.body}
                            </p>
                        </div>
                        <Fab
                            size="small"
                            className={styles.deleteButton}
                            // Ajout d'une fonction pour supprimer un post
                            onClick={() => onDeletePost(post)}>
                            <DeleteIcon />
                        </Fab>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Demo03Final;

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
