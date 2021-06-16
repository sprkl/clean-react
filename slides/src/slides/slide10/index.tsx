// Externals
import { Heading, Slide, Text, Grid, Image, FlexBox, Notes } from "spectacle";

const Slide10 = () => {
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
                            <Text>Composant : ✔️</Text>
                        </FlexBox>
                        <FlexBox
                            flex={1}
                            alignItems="center"
                            flexDirection="column">
                            <Image
                                src="/assets/codepen-brands.svg"
                                style={{ width: "25%" }}
                            />
                            <Text>Petit projet : ✔️</Text>
                        </FlexBox>
                        <FlexBox
                            flex={1}
                            alignItems="center"
                            flexDirection="column">
                            <Image
                                src="/assets/sitemap-solid.svg"
                                style={{ width: "25%" }}
                            />
                            <Text>Modules : 🙋❓</Text>
                        </FlexBox>
                    </Grid>
                </FlexBox>
                <Notes>
                    Quid des gros projets ?
                    <br />
                    On rassemble le code source par "domaine", ou "module",
                    plutôt que pour le côté "fonctionnel".
                </Notes>
            </FlexBox>
        </Slide>
    );
};

export default Slide10;
