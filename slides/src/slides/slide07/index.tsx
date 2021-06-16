// Externals
import { Appear, Heading, Notes, Slide, Text } from "spectacle";

const Slide07 = () => {
    return (
        <Slide
            transition={{
                from: {},
                enter: {
                    transform: "scale(1) rotate(0)",
                    opacity: 1,
                },
                leave: {
                    transform: "scale(0.5) rotate(180)",
                    opacity: 1,
                },
            }}>
            <Heading fontSize={60}>05. Créer des sous-composants</Heading>

            <Text>
                DRY : Don't <strong>Repeat</strong> Yourself
            </Text>
            <Text>Simplifier votre code</Text>

            <Appear>
                <Text>Ou plutôt...</Text>
            </Appear>

            <Notes>
                Avoir tout en un fait que tout est lié, et n'importe quel petit
                changement va avoir un impact sur l'ensemble de la vue.
                <br />
            </Notes>
        </Slide>
    );
};

export default Slide07;
