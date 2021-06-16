// Externals
import { Heading, Slide, Notes, Text, defaultTheme } from "spectacle";

const Slide05 = () => {
    return (
        <Slide>
            <Heading>03. Mémoriser des données</Heading>

            <Text>
                <strong>Composant fonction</strong>, ça implique une autre
                mécanique.
            </Text>
            <Text>
                À chaque fois qu'un <strong>render</strong> est nécessaire,
                c'est toute la fonction qui s'exécute à nouveau.
            </Text>
            <Text>
                Ca signifie peut-être re-déclarer certaines variables, ou
                refaire des traitements inutiles. Et ça peut avoir un coût.
            </Text>

            <Text>
                🔗
                <a
                    style={{ color: defaultTheme.colors.secondary }}
                    href="http://localhost:3001/demo-02/final"
                    target="_blank"
                    rel="noreferrer">
                    Suite démo 02
                </a>
            </Text>

            <Notes>
                Faire un dessin sur le cycle de vie de class vs function
            </Notes>
        </Slide>
    );
};

export default Slide05;
