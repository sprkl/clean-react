// Externals
import {
    Heading,
    Slide,
    Text,
    slideTransition,
    OrderedList,
    Appear,
    ListItem,
    defaultTheme,
} from "spectacle";

const Slide04 = () => {
    return (
        <Slide
            transition={{
                ...slideTransition,
                from: {},
                enter: {},
            }}>
            <Heading>02. Utiliser des composants fonctions</Heading>

            <OrderedList listStyleType="circle">
                <Appear>
                    <ListItem>
                        Plus <strong>facile à lire</strong> (moins de bruit)
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        On commence un composant{" "}
                        <strong>avec le minimum</strong>, et on ajoute des
                        fonctionnalités <strong>si besoin</strong>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        Encourage à coder en pensant <em>React</em>{" "}
                        (fonctionnel) et garder les composants{" "}
                        <strong>simples</strong>
                    </ListItem>
                </Appear>
                <Appear>
                    <Text>
                        🔗
                        <a
                            style={{ color: defaultTheme.colors.secondary }}
                            href="http://localhost:3001/demo-02/start"
                            target="_blank"
                            rel="noreferrer">
                            Demo 02
                        </a>
                    </Text>
                </Appear>
            </OrderedList>
        </Slide>
    );
};

export default Slide04;
