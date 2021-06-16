// Externals
import { Heading, Slide, Text, Grid, Image, FlexBox, Notes } from "spectacle";

const Slide01b = () => {
    return (
        <Slide>
            <FlexBox flex={1} flexDirection="column">
                <Heading>Clean React à tous les étages</Heading>
                <FlexBox alignItems="center" flex={1}>
                    <Grid
                        gridTemplateColumns="1fr 1fr 1fr"
                        verticalAlign="center">
                        <FlexBox
                            flex={1}
                            alignItems="center"
                            flexDirection="column">
                            <Image
                                src={"/assets/code-solid.svg"}
                                style={{ width: "25%" }}
                            />
                            <Text>Composant</Text>
                        </FlexBox>
                        <FlexBox
                            flex={1}
                            alignItems="center"
                            flexDirection="column">
                            <Image
                                src="/assets/codepen-brands.svg"
                                style={{ width: "25%" }}
                            />
                            <Text>Petit projet</Text>
                        </FlexBox>
                        <FlexBox
                            flex={1}
                            alignItems="center"
                            flexDirection="column">
                            <Image
                                src="/assets/sitemap-solid.svg"
                                style={{ width: "25%" }}
                            />
                            <Text>Modules</Text>
                        </FlexBox>
                    </Grid>
                </FlexBox>
                <Notes>
                    De la part de quelqu'un qui est souvent amené à devoir
                    relire du code d'autres développeurs
                </Notes>
            </FlexBox>
        </Slide>
    );
};

export default Slide01b;
