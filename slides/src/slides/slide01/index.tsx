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

const Slide01 = () => {
    return (
        <Slide>
            <Heading>
                Clean React : est-ce que ça doit forcément être le bordel ?
            </Heading>
            <Grid gridTemplateColumns="1fr 1fr">
                <FlexBox flex={1} alignItems="center">
                    <Image src={image}></Image>
                </FlexBox>
                <FlexBox alignContent="center" flexDirection="column">
                    <Text textAlign="left">
                        Un retour d'<strong>expérience</strong> et{" "}
                        <strong>quelques suggestions</strong> pour ne pas perdre
                        la tête.
                    </Text>
                    <Appear>
                        <Text color={defaultTheme.colors.secondary}>
                            <strong>Maintenabilité</strong>
                        </Text>
                    </Appear>
                    <Appear>
                        <Text color={defaultTheme.colors.secondary}>
                            <strong>Performance</strong>
                        </Text>
                    </Appear>
                </FlexBox>
            </Grid>

            <Notes>
                De la part de quelqu'un qui est souvent amené à devoir relire du
                code d'autres développeurs
            </Notes>
        </Slide>
    );
};

export default Slide01;
