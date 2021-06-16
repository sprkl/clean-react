// Externals
import {
    Heading,
    Slide,
    OrderedList,
    ListItem,
    Notes,
    Appear,
} from "spectacle";

const Slide02 = () => {
    return (
        <Slide>
            <Heading>01. Typer à tout prix</Heading>

            <OrderedList listStyleType="circle">
                <Appear>
                    <ListItem>
                        Faites-le <strong>dès le début</strong> : la dette est
                        difficile à rattraper
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        Faites-le <strong>pour les autres</strong> : typer,
                        c'est documenter
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        Faites-le <strong>bien</strong> : <em>any</em> devrait
                        être votre dernier choix
                    </ListItem>
                </Appear>
            </OrderedList>

            <Notes>
                1. Parce que (a) c'est parfois chiant à faire, on va pas se
                mentir. Mais en plus de ça, (b) on va d'office faire des
                erreurs, oublier des choses qui ne seraient pas arrivées en
                temps normal avec Typescript. Donc en plus de devoir définir des
                types, vous devrez passer du temps à cleaner votre code.
                <br />
                2. On dit toujours qu'il faut se méfier des psycopathes qui
                reprendront votre code, mais on ne se méfie pas assez du
                développeur un peu gugus, à qui on devra tout réexpliquer, et
                qui mettra des heures à comprendre le projet, de quoi on parle,
                les données qu'on manipule. Typer, c'est documenter.
                <br />
                3. Si c'est pour utiliser any, autant ne rien faire.
            </Notes>
        </Slide>
    );
};

export default Slide02;
