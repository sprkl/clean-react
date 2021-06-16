import React from "react";

import { createStyles, withStyles } from "@material-ui/core";
import { Post } from "../../../models/post";

import dataSource from "../data.json";
import * as delay from "../../../helpers/delay";

const fetchSortedData = (): Array<Post> => {
    console.log("slow sort function : start");

    delay.block();
    const result = dataSource.sort((a, b) => a.title.localeCompare(b.title));

    console.log("slow sort function : end");

    return result;
};

interface Demo02State {
    filter: string;
}

class Demo02Component extends React.Component<{ classes: any }, Demo02State> {
    sortedItems: Array<Post>;

    constructor(props: any) {
        super(props);

        // long running method to fetch data
        this.sortedItems = fetchSortedData();
        this.state = {
            filter: "",
        };
    }

    render() {
        const { classes } = this.props;

        const date = new Date().getTime();

        const filteredItems = this.sortedItems.filter(
            (s) =>
                s.title.indexOf(this.state.filter) >= 0 ||
                s.body.indexOf(this.state.filter) >= 0
        );

        const date2 = new Date().getTime();

        return (
            <div className={classes.root}>
                <h1> Publications </h1>
                <label htmlFor="input-filter">Filtrer :</label>
                <input
                    name="input-filter"
                    type="text"
                    value={this.state.filter}
                    className={classes.input}
                    onChange={(e) =>
                        this.setState({ filter: e.target.value })
                    }></input>
                <p>
                    <strong>Temps de process : {date2 - date}ms</strong>
                </p>
                <section>
                    {filteredItems.map((item, index) => (
                        <article
                            key={item.id + "-" + index}
                            className={classes.article}>
                            <h2 className={classes.title}>
                                {item.title
                                    .split(
                                        new RegExp(
                                            `(${this.state.filter})`,
                                            "gi"
                                        )
                                    )
                                    .map((text, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={
                                                    text === this.state.filter
                                                        ? classes.highlighted
                                                        : undefined
                                                }>
                                                {text}
                                            </span>
                                        );
                                    })}
                            </h2>
                            <p className={classes.content}>
                                {item.body
                                    .split(
                                        new RegExp(
                                            `(${this.state.filter})`,
                                            "gi"
                                        )
                                    )
                                    .map((text, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={
                                                    text === this.state.filter
                                                        ? classes.highlighted
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
    }
}

const styles = (theme: any) =>
    createStyles({
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
    });

export default withStyles(styles)(Demo02Component);
