import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Post } from "../../models/post";

import dataSource from "./data.json";
import * as delay from "../../helpers/delay";

const fetchSortedData = (): Array<Post> => {
    console.log("slow sort function : start");

    delay.block();
    const result = dataSource.sort((a, b) => a.title.localeCompare(b.title));

    console.log("slow sort function : end");

    return result;
};

const Demo02 = () => {
    const styles = useStyles();

    const [filter, setFilter] = useState("");

    const date = new Date().getTime();

    // long running method to fetch data
    const sortedItems = fetchSortedData();

    const filteredItems = sortedItems.filter(
        (s) => s.title.indexOf(filter) >= 0 || s.body.indexOf(filter) >= 0
    );

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
            <section>
                {filteredItems.map((item, index) => (
                    <article
                        key={item.id + "-" + index}
                        className={styles.article}>
                        <h2 className={styles.title}>
                            {item.title
                                .split(new RegExp(`(${filter})`, "gi"))
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
                                })}
                        </h2>
                        <p className={styles.content}>
                            {item.body
                                .split(new RegExp(`(${filter})`, "gi"))
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
                                })}
                        </p>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Demo02;

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
    },
    title: {
        fontSize: 24,
    },
    content: {},
    highlighted: {
        backgroundColor: "yellow",
    },
}));
