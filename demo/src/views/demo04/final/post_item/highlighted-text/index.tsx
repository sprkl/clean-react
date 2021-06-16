import React from "react";

import { makeStyles } from "@material-ui/core";

interface Props {
    text: string;
    filter: string;
}

const splitText = (text: string, filter: string) =>
    text.split(new RegExp(`(${filter})`, "gi"));

const HighlightedText = ({ text, filter }: Props) => {

    React.useEffect(() => {
        console.log('Initialisation du highlighted Text')
    }, [])

    
    React.useEffect(() => {
        console.log('Re-render du highlighted Text')
    }, [text, filter])

    const styles = useStyles();

    if (!filter) {
        return <span>{text}</span>;
    }

    return (
        <>
            {splitText(text, filter).map((text, index) => {
                return (
                    <span
                        key={index}
                        className={
                            text === filter ? styles.highlighted : undefined
                        }>
                        {text}
                    </span>
                );
            })}
        </>
    );
};

export default HighlightedText;

const useStyles = makeStyles((theme) => ({
    highlighted: {
        backgroundColor: "yellow",
    },
}));
