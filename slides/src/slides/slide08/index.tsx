// Externals
import {
    Appear,
    defaultTheme,
    Heading,
    Notes,
    Slide,
    slideTransition,
    Text,
} from "spectacle";

const Slide08 = () => {
    return (
        <Slide
            transition={{
                ...slideTransition,
                from: {
                    transform: "scale(0.5) rotate(-180deg)",
                    opacity: 0,
                },
                enter: {
                    transform: "scale(1) rotate(0)",
                    opacity: 1,
                },
            }}>
            <Heading fontSize={60}>05. Créer (mieux) des sous-composants</Heading>

            <Text>... dans cet ordre !</Text>

            <Text fontSize={60}>
                Simplifier votre code :<br />
                <strong>Single Responsability Principle</strong>
            </Text>

            <Text>
                DRY : Don't <strong>Repeat</strong> Yourself
            </Text>

            <Text>
                🔗
                <a
                    style={{ color: defaultTheme.colors.secondary }}
                    href="http://localhost:3001/demo-04"
                    target="_blank"
                    rel="noreferrer">
                    Démo 04
                </a>
            </Text>

            <Notes>
                DRY a tendance à être revendiqué en premier par les jeunes
                développeurs, quitte à en faire des composants monstrueux mais
                réutilisé partout.
                <br />
                On en oublie le principe de Single Responsability
            </Notes>
        </Slide>
    );
};

export default Slide08;
