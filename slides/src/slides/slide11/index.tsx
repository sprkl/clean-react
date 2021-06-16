import React from "react";

// Externals
import {
    Heading,
    Slide,
    Text,
    Grid,
    Image,
    FlexBox,
    Appear,
    defaultTheme,
    Notes,
} from "spectacle";

// Assets
import image from "./cheshire-cat.jpg";

const Slide11 = () => {
    return (
        <Slide>
            <Heading>Clean React : c'est possible !</Heading>
            <Grid gridTemplateColumns="1fr 1fr">
                <FlexBox flex={1}>
                    <Image src={image}></Image>
                </FlexBox>
                <FlexBox flex={1} alignItems="stretch" flexDirection="column">
                    <Text textAlign="left">
                        Renaud Dumont
                        <br />
                        <a
                            style={{ color: defaultTheme.colors.primary }}
                            href="https://www.sparkle.tech"
                            target="_blank"
                            rel="noreferrer">
                            Sparkle SRL
                        </a>
                    </Text>
                    <Text>Dispo sur Slack pour les questions :)</Text>
                </FlexBox>
            </Grid>
        </Slide>
    );
};

export default Slide11;
