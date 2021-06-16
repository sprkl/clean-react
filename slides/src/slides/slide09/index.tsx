// Externals
import { defaultTheme, Heading, Notes, Slide, Text } from "spectacle";

const Slide09 = () => {
    return (
        <Slide>
            <Heading>06. Utiliser des hooks customs</Heading>

            <Text>Pour sortir tous les "traitements" de vos composants</Text>
            <Text>
                Pour que vos composants se limitent au maximum à de la
                déclaration d'interface{" "}
                <small>(ce pourquoi React est prévu à la base)</small>
            </Text>

            <Text>
                🔗
                <a
                    style={{ color: defaultTheme.colors.secondary }}
                    href="http://localhost:3001/demo-05"
                    target="_blank"
                    rel="noreferrer">
                    Démo 05
                </a>
            </Text>

            <Notes>
                Illustration du remplacement d'une série d'initialisation liées au cycle de vie par un hook custom
            </Notes>
        </Slide>
    );
};

export default Slide09;
