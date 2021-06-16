// Externals
import { defaultTheme, Heading, Notes, Slide, Text } from "spectacle";

const Slide06 = () => {
    return (
        <Slide>
            <Heading>04. Éviter de mixer JS et JSX </Heading>

            <Text>
                Définir les fonctions <strong>en amont</strong>, pas dans la
                déclaration de l'UI.
            </Text>
            <Text>
                <strong>Découpler</strong> les fonctions qui n'ont rien à voir
                avec le composant.
            </Text>

            <Text>
                🔗
                <a
                    style={{ color: defaultTheme.colors.secondary }}
                    href="http://localhost:3001/demo-03"
                    target="_blank"
                    rel="noreferrer">
                    Démo 03
                </a>
            </Text>

            <Notes>
                Quand un composant commence à grandir en taille, on fini vite
                par faire l'ascensseur pour visualiser l'état et les props du
                composant, voir où ces données sont utilisées dans l'affichage,
                et voir quelles parties du composant modifient ces données
            </Notes>
        </Slide>
    );
};

export default Slide06;
