// Externals
import {
    Heading,
    Slide,
    Notes,
    Text,
    CodePane,
    slideTransition,
    defaultTheme,
} from "spectacle";

const Slide03 = () => {
    return (
        <Slide
            transition={{
                ...slideTransition,
                from: {},
                enter: {},
            }}>
            <Heading>01. Typer à tout prix</Heading>

            <CodePane language="typescript" highlightRanges={[]}>
                {`
type DisplayMode = 'label' | 'icon';

interface Props {
  displayMode?: DisplayMode;
  iconSize?: number;
}

const SomeComponent = ({ displayMode = 'label', iconSize = 20 }: Props) => {

   return (...)
}
        `}
            </CodePane>

            <Text>
                🔗
                <a
                    style={{ color: defaultTheme.colors.secondary }}
                    href="http://localhost:3001/demo-01"
                    target="_blank"
                    rel="noreferrer">
                    Demo 01
                </a>
            </Text>

            <Notes>
                ça ne demande pas grand chose :
                <br />- typer les props des composants <br />
                - définir quelques types custom <br />- donner des valeurs par
                défaut
            </Notes>
        </Slide>
    );
};

export default Slide03;
